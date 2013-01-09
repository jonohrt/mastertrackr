Meteor.subscribe("groups", function() {
  var group = Groups.findOne({owner: this.userId}); 
});



Meteor.startup(function() {

	 

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
Template.create_or_display.group = function () {
  return Groups.findOne({owner: this.userId});
};

Template.display_group.group = function () {
	return Groups.findOne({owner: this.userId});
};

Template.display_group.users = function() {
  return Meteor.users.find();
}

Template.display_group.events({
  'click .remove': function(event) {
    Groups.remove(this._id);
  }
});
