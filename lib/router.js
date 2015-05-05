Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});
Router.route('/', {name: 'groupsList'});
Router.route('/groups/:_id', {
  name: 'groupPage',
  data: function() {
    return Groups.findOne(this.params._id);
  }
});


Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() {
    return Posts.findOne(this.params._id);
  }
});

Router.route('/group_create', {name:'groupCreate'});
//Router.route('/post_submit', {name:'postSubmit'});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.onBeforeAction('dataNotFound', {only: 'groupPage'});
