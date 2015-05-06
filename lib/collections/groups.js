Groups = new Mongo.Collection('groups');

Meteor.methods({
  
  groupInsert: function(groupAttributes){
    check(Meteor.userId(), String);
    check(groupAttributes, {
      title: String,
      createrId: String
    });
    
    var user = Meteor.user();
    var group = _.extend(groupAttributes, {
      createrId: user._id,
      author: user.profile.name,
    });
    
    var groupId = Groups.insert(group);
    
    return {
      _id: groupId
    }
  }
});
