Meteor.methods({
  addBook: function(title,author,volume,pages,genre,type,row){
    Books.insert({
      Title: title,
      Author: author,
      Volume: volume,
      Pages: pages,
      Genre: genre,
      Type: type,
      Row: row,
      CreatedAt: new Date()
    })
  }
})
