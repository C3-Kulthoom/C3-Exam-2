const mongoose = require("mongoose")

const  booksSchema =new mongoose.schema({

    title : {type : String }
     , author :{type : String }
     , pages: {type : Number }
     , publisher: {type : String }
     , published_at :{type : Date }

})


const booksModel = mongoose.modle("Book" , booksSchema )

module.exports = booksModel 