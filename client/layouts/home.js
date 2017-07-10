Template.home.events({
  'keydown #bookSearch': function(event){
    if(event.which == 13)
      {
        var book = $('#bookSearch').val();
        Session.set('book', book)
        // alert('you searched for '+book);
        $('#bookSearch').val('')
      }
  }
})
Template.home.helpers({
  settings: function() {
    return {
      position: "top",
      limit: 5,
      rules: [
        {
          collection: Books,
          field: "Author",
          template: Template.title
        }
      ]
    };
  }
});
