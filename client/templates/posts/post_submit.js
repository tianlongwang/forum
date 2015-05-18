Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var $title = $(e.target).find('[name=title]');
    var post = {
      title: $title.val(),
      groupId: this._id,
    };

    Meteor.call('postInsert', post, function(error, postId) {
      if (error){
        throwError(error.reason);
      } else {
        $title.val(''); // Clear content in title input text box.
      }
    });
  }
});  
