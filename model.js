Groups = new Meteor.Collection("groups");

Groups.allow({
	insert: function (userId, group) {
		return false;
	},
	remove: function(userId, groups) {
		return ! _.any(groups, function(group) {
			return group.owner !== userId;
		});
	}
})

Meteor.methods({
	createGroup: function(options) {
		options = options || {};
		if (! (typeof options.name === "string" && options.name.length ))
			throw new Meteor.Error(400, "Required parameter missing");
		if (options.name > 100)
			throw new Meteor.Error(413, "Name is too long.");
		if(! this.userId)
			throw new Meteor.Error(403, "You must be logged in.")
		return Groups.insert({
			owner: this.userId,
			name: options.name,
			invited: [],
			members: []
		});
	}
});