Template.postSubmit.events({
//TODO: inside Post, add in Group ID, template, template.data._id
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val()
    };

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});
      
