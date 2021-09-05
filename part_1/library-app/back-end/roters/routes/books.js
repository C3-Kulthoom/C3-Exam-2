const express = require("express")


const {addBook ,getallBook ,getspicificBook }= require("./../controllers/books")

const booksRoutes = express.Router()

booksRoutes.post("/books" ,addBook)
booksRoutes.get("/books" ,getallBook)
booksRoutes.get("/books/:book_id" ,getspicificBook)


module.exports =booksRoutes 