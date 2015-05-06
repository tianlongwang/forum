Template.postPage.helpers({
  comments: function(){
    return Comments.find({postId: this._id});
  },
  postGroup: function(){
    return Groups.findOne({_id: Posts.findOne(this._id).groupId});
  }
});
