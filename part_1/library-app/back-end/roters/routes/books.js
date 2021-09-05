const express = require("express")


const addBook = require("./../controllers/books")

const booksRoutes = express.Router()

booksRoutes.post("/books" ,addBook  )

module.exports =booksRoutes 