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


if (Groups.find().count() == 0){
  Groups.insert({
    title: "蜀国",
    author: "刘备",
    url : "http://www.baidu.com/"
  
  });
  Groups.insert({
    title: "汉朝群雄",
    author: "汉献帝",
    url : "http://www.baidu.com/"
  });
}
