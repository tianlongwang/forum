Template.groupCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var group = {
      title: $(e.target).find('[name=title]').val()
    };
    
    group._id = Groups.insert(group);
    Router.go('groupPage', group);
  }
});

      
