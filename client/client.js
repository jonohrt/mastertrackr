Meteor.subscribe("groups", function() {
  Session.set("group", Groups.findOne({owner: this.userId})); 
});

Meteor.subscribe("users");



Meteor.startup(function() {

	 

});


Template.create_group.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    var group_name = document.getElementById('name');
    if (group_name.value) {
    	Meteor.call('createGroup', {name: group_name.value});
      Session.set("group", Groups.findOne({owner: this.userId})) ; 
    }
  }
});
Template.create_or_display.group = function () {
  return Session.get("group");
};

Template.display_group.group = function () {
	return Session.get("group");
};

Template.display_group.users = function() {
  console.log(Meteor.users.find());
  return Meteor.users.find();

}

Template.display_group.events({
  'click .remove': function(event) {
    Groups.remove(this._id);
    Session.set("group", null);
  }
});
