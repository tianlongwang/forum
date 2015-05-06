Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      groupId: this._id
    };

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});
      
