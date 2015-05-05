Template.groupPage.helpers({
  posts: function() {
    return Posts.find({groupId:this._id})
  }
});
