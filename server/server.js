
Meteor.startup(function () {
  // code to run on server at startup
  Meteor.publish("groups", function() {
  	return Groups.find({}, {owner: this.userId})
  });
});
