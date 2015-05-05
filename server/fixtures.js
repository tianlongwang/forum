if (Posts.find().count() === 0) { Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
});
  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
}); 
}

if (Meteor.users.find().count() === 0 ) {
    var guanyuId = Accounts.createUser({
        username: 'guanyu',
        email: 'guanyu@wangtianlong.com',
        password: 'guanyu',
        profile: {
          name:'关羽',
          contactIDList: [],
          nameCard: {}
        }
    });
    var zhangfeiId = Accounts.createUser({
        username: 'zhangfei',
        email: 'zhangfei@wangtianlong.com',
        password: 'zhangfei',
        profile: {
          name:'张飞',
          contactIDList: [],
          nameCard: {}
        }
    });
    var caocaoId = Accounts.createUser({
        username: 'caocao',
        email: 'caocao@wangtianlong.com',
        password: 'caocao',
        profile: {
          name:'曹操',
          contactIDList: [],
          nameCard: {}
        }
    });
    var hanxiandiId = Accounts.createUser({
        username: 'hanxiandi',
        email: 'hanxiandi@wangtianlong.com',
        password: '',
        profile: {
          name:'汉献帝',
          contactIDList: [],
          nameCard: {}
        }
    });
    var liubeiId = Accounts.createUser({
        username: 'liubei',
        email: 'liubei@wangtianlong.com',
        password: 'liubei',
        profile: {
          name:'刘备',
          contactIDList: [],
          nameCard: {}
        }
    });
}
if (Groups.find().count() === 0){
  Groups.insert({
    title: "蜀国",
    createrID: Meteor.users.findOne({'username':'liubei'})['_id'],
    author : Meteor.users.findOne({'username':'liubei'})['profile']['name']  
  });
  Groups.insert({
    title: "汉朝群雄",
    createrID: Meteor.users.findOne({'username':'hanxiandi'})['_id'],
    author:Meteor.users.findOne({'username':                            'hanxiandi'})['profile']['name'],
  });
}
