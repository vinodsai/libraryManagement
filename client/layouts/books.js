Template.books.helpers({
  book: function(){
    return Books.find({Author:Session.get('book')})
  }
});
