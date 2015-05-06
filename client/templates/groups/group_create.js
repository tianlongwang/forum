Template.groupCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var group = {
      title: $(e.target).find('[name=title]').val(),
      createrId: Meteor.userId()
    };
    
    Meteor.call('groupInsert', group, function(error, result){
      if (error)
        return throwError(error.reason);
  
      Router.go('groupPage', result);
    });
  }
});

      
