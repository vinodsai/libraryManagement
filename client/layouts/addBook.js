Template.addBook.events({
  'click #addBook': function(){
    var title = $('#bookTitle').val();
    var author = $('#bookAuthor').val();
    var volume = $('#bookVolume').val();
    var pages = $('#bookPages').val();
    var genre = $('#bookGenre').val();
    var type = $('#typeSelector').val();
    var row = $('#rowSelector').val();
    Meteor.call('addBook', title,author,volume,pages,genre,type,row);
    $('#bookTitle').val('');
    $('#bookAuthor').val('');
    $('#bookVolume').val('');
    $('#bookPages').val('');
    $('#bookGenre').val('');
    $('#rowSelector').val('A');
  }
})
Template.addBook.helpers({
  totalCount: function(){
    var totalCount =  Books.find().count();
    return totalCount;
  },
  bCount: function(){
    var bCount =  Books.find({Row:"B"}).count();
    if(bCount>20){
      $('#bRow').hide();
      return 'Full';
    }
    if(bCount==0){
      $('#bRow').show();
      return 'Empty'
    }
    else{
      return bCount;
    }
  },
  aCount: function(){
    var aCount =  Books.find({Row:"A"}).count();
    if(aCount>20){
      $('#aRow').hide();
      return 'Full';
    }
    if(aCount==0){
      $('#aRow').show();
      return 'Empty'
    }
    else{
      return aCount;
    }
  },
  cCount: function(){
    var cCount =  Books.find({Row:"C"}).count();
    if(cCount>20){
      $('#cRow').hide();
      return 'Full';
    }
    if(cCount==0){
      $('#cRow').show();
      return 'Empty'
    }
    else{
      return cCount;
    }
  },
  dCount: function(){
    var dCount =  Books.find({Row:"D"}).count();
    if(dCount>20){
      $('#dRow').hide();
      return 'Full';
    }
    if(dCount==0){
      $('#dRow').show();
      return 'Empty';
    }
    else{
      return dCount;
    }
  },
  paperbackCount: function(){
    var paperbackCount =  Books.find({Type:"Paper back"}).count();
    return paperbackCount;
  },
  hardbackCount: function(){
    var hardbackCount =  Books.find({Type:"Hard back"}).count();
    return hardbackCount;
   }
})
