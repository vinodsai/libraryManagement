Books = new Mongo.Collection('Books');
Books.allow({
  insert: function(){
    return false;
  }
});
