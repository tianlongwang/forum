Template.postsList.helpers({
  posts: function() {
    return Posts.find({groupId:this._id})
  }
});
