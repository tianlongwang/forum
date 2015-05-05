Meteor.publish('posts', function() { 
  return Posts.find();
});
Meteor.publish('groups', function() { 
  return Groups.find();
});
