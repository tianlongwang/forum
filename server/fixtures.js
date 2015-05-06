
if (Meteor.users.find().count() === 0 ) {
    var guanyuId = Accounts.createUser({
        username: 'guanyu',
        email: 'guanyu@wangtianlong.com',
        password: 'guanyu',
        profile: {
          name:'关羽',
          contactIdList: [],
          registeredTime:Date.now(),
          nameCard: {}
        }
    });
    var zhangfeiId = Accounts.createUser({
        username: 'zhangfei',
        email: 'zhangfei@wangtianlong.com',
        password: 'zhangfei',
        profile: {
          name:'张飞',
          contactIdList: [],
          registeredTime:Date.now(),
          nameCard: {}
        }
    });
    var caocaoId = Accounts.createUser({
        username: 'caocao',
        email: 'caocao@wangtianlong.com',
        password: 'caocao',
        profile: {
          name:'曹操',
          contactIdList: [],
          registeredTime:Date.now(),
          nameCard: {}
        }
    });
    var hanxiandiId = Accounts.createUser({
        username: 'hanxiandi',
        email: 'hanxiandi@wangtianlong.com',
        password: 'hanxiandi',
        profile: {
          name:'汉献帝',
          contactIdList: [],
          registeredTime:Date.now(),
          nameCard: {}
        }
    });
    var liubeiId = Accounts.createUser({
        username: 'liubei',
        email: 'liubei@wangtianlong.com',
        password: 'liubei',
        profile: {
          name:'刘备',
          contactIdList: [],
          registeredTime:Date.now(),
          nameCard: {}
        }
    });
    liubeiDoc = Meteor.users.findOne(liubeiId) 
    guanyuDoc = Meteor.users.findOne(guanyuId)
    zhangfeiDoc = Meteor.users.findOne(zhangfeiId)
    hanxiandiDoc = Meteor.users.findOne(hanxiandiId)
  var shuguoGroupId = Groups.insert({
    title: "蜀国",
    createrId: liubeiId,
    createdTime: Date.now(),
    renewedTime: Date.now(),
    author : liubeiDoc['profile']['name']  
  });
  shuguoGroupDoc = Groups.findOne(shuguoGroupId)
  var hanchaoGroupId = Groups.insert({
    title: "汉朝群雄",
    createrId: hanxiandiId,
    createdTime: Date.now(),
    renewedTime: Date.now(),
    author : hanxiandiDoc['profile']['name']  
  });
  hanchaoGroupDoc = Groups.findOne(hanchaoGroupId)
  var qiecuoPostId = Posts.insert({
    //title: '来切磋一下',
    createrId: zhangfeiId,
    createdTime: Date.now(),
    renewedTime: Date.now(),
    author : zhangfeiDoc['profile']['name'],  
    groupId: shuguoGroupId,
    title: '最近手痒，大哥二哥要不要切磋切磋'
  });
  var haodommentId = Comments.insert({
    postId: qiecuoPostId,
    userId: guanyuId,
    createdTime: Date.now(),
    author: guanyuDoc.profile.name, 
    body: "二哥来陪你过过招"
  });
  var dagehaodeCommentId = Comments.insert({
    postId: qiecuoPostId,
    userId: liubeiId,
    createdTime: Date.now(),
    author: liubeiDoc.profile.name,
    body: "大哥也来陪你过过招"
  });
  var chunqiuPostId = Posts.insert({
    //title: '约人看书',
    createrId: guanyuId, 
    createdTime: Date.now(),
    renewedTime: Date.now(),
    author : guanyuDoc['profile']['name'],
    groupId: shuguoGroupId,
    title: '有人想一起看春秋么？'
  });
  var buyaodalePostId = Posts.insert({
    //title: '不要打了',
    createrId: hanxiandiId,
    createdTime: Date.now(),
    author : hanxiandiDoc['profile']['name'],
    groupId: hanchaoGroupId,
    title: '你们不要打了，生灵涂炭'
  }); 
  var yaodaCommentId = Comments.insert({
    postId: buyaodalePostId,
    createdTime: Date.now(),
    userId: caocaoId,
    author: Meteor.users.findOne(caocaoId).profile.name,
    body: "皇上，反贼太多啊"
  }); 
}
