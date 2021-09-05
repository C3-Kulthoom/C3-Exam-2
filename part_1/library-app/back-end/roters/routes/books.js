const express = require("express")


const {addBook ,getallBook ,getspicificBook,deletespicificBook }= require("./../controllers/books")

const booksRoutes = express.Router()

booksRoutes.post("/books" ,addBook)
booksRoutes.get("/books" ,getallBook)
booksRoutes.get("/books/:book_id" ,getspicificBook)
booksRoutes.delete("/books/:book_id" ,deletespicificBook)


module.exports =booksRoutes 