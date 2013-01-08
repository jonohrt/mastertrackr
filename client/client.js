if (Meteor.isClient) {
  Meteor.startup(function() {
  	Meteor.autorun(function () {
  	  if (! Session.get("selected")) {
        var group = Groups.findOne();
        if(group) {
          Session.set("selected", group._id); 
        }
        
      }
    });
  });
	
  // Template.hello.greeting = function () {
  //   return "Welcome to mastertaskr.";
  // };

  Template.create_group.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      var group_name = document.getElementById('name');
      if (group_name.value) {
      	Meteor.call('createGroup', {name: group_name.value});
      }
    }
  });

  Template.display_group.group = function () {
  	console.log("fuck");
  	return Groups.findOne(Session.get("selected"));
  };
}