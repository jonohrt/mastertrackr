
Meteor.startup(function () {
  // code to run on server at startup
  Meteor.publish("groups", function() {
  	return Groups.find({}, {owner: this.userId})
  });
  Meteor.publish("users", function() {
  	return Meteor.users.find({}, {fields: {emails: 1}});

  });
});
