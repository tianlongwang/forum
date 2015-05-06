Meteor.publish('posts', function() { 
  return Posts.find();
});
Meteor.publish('groups', function() { 
  return Groups.find();
});
Meteor.publish('comments', function(){
  return Comments.find();
});
