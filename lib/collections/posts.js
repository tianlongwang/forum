Posts = new Mongo.Collection('posts');

Meteor.methods({
  /**
   * Adds a new post in a group.
   * postAttributes need to have groupId and title.
   */
  postInsert: function(postAttributes) {

    check(this.userId, String);
    check(postAttributes, {
      groupId: String,
      title: String
    });
    var user = Meteor.user();
    var group = Groups.findOne(postAttributes.groupId);
    if (!group)
      throw new Meteor.Error('invalid-post', 'You must post on a group');
    post = _.extend(postAttributes, {
      userId: user._id,
      author: user.profile.name,
      createdTime: new Date(),
      renewedTime: new Date()
    });
    return Posts.insert(post);
  }
});
