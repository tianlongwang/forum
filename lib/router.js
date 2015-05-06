Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('groups'),
            Meteor.subscribe('posts'),
            Meteor.subscribe('comments')];
  }
});
Router.route('/', {
  name: 'groupsList'
});
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

Router.route('/group_create', {
  name: 'groupCreate'
});
//Router.route('/post_submit', {name:'postSubmit'});

var requireLogin = function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {
  only: 'postPage'
});
Router.onBeforeAction('dataNotFound', {
  only: 'groupPage'
});
Router.onBeforeAction(requireLogin, {
  only: 'groupCreate'
});
