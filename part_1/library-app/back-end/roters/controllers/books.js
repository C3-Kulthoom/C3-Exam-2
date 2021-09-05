const booksModel = require("../../model/booksSchema")

const addBook =(req,res)=>{

    const {title,
        author,
        pages,
        publisher,
        published_at}= req.body 
        
        const newBook = new booksModel ({title,
            author,
            pages,
            publisher,
            published_at})

            newBook.save()
            .then((result)=>{res.json({msg:"added", result:result }).status(201)}).catch((err)=>{res.json({msg:"not added " ,result:err}).status(404)})

}


const getallBook =(req,res)=>{

    booksModel.find({}).then((result)=>{res.json({msg:"success", result:result }).status(201)}).catch((err)=>{res.json({msg:"not success " ,result:err}).status(404)})



}
// /books/:book_id
const getspicificBook =(req,res)=>{
const book_id = req.params.book_id
    booksModel.findOne({book_id:book_id}).then((result)=>{res.json({msg:"success", result:result }).status(201)}).catch((err)=>{res.json({msg:"not success " ,result:err}).status(404)})



} 
module.exports = {addBook ,getallBook,getspicificBook }