const express = require("express")


const {addBook ,getallBook}= require("./../controllers/books")

const booksRoutes = express.Router()

booksRoutes.post("/books" ,addBook)
booksRoutes.get("/books" ,getallBook)

module.exports =booksRoutes 