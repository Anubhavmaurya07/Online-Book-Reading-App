const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/merndb')
.then(() => app.listen(3001, () => console.log('Server is running')))
.catch((error) => console.log(error.message))

const bookSchema = mongoose.Schema({
    bookTitle : String,
    authorName : String,
    imageURL : String,
    category : String,
    bookDescription : String,
    bookPDFURL : String
})
const bookModel = mongoose.model('bookModel', bookSchema);


// creation of new book post 
app.post('/upload-book', async(req, res) => {
    const {bookDescription, bookTitle, authorName, imageURL, category, bookPDFURL} = req.body
    try {
        const bookDetails = await bookModel.create({
            bookTitle : bookTitle,
            authorName : authorName,
            imageURL : imageURL,
            category : category,
            bookDescription : bookDescription,
            bookPDFURL : bookPDFURL
        })
        res.status(201).json(bookDetails)
    } catch (error) {
        res.status(400).json({ message : error.message })
    }
})

// get all books from database
app.get('/all-books', async(req, res) => {
    try {
        const response = await bookModel.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ message : error.message })
    }
})

// get one book data from database through id
app.get('/book/:id', async (req, res) => {
    try {
        const {id} = req.params
        const response = await bookModel.findById({ _id : id});
        res.status(201).json(response);
    } catch (error) {
        res.status(404).json({ message : error.message })
    }
})

// delete book from database through id 
app.delete('/book/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deletedBook = await bookModel.findByIdAndDelete({ _id : id })
        res.status(200).json(deletedBook)
    } catch (error) {
        res.status(500).json({ message : error.message })
    }
})

// update book in database through id
app.patch('/book/:id', async (req, res) => {
    try {
        const { id } = req.params
        const {bookDescription, bookTitle, authorName, imageURL, category, bookPDFURL} = req.body
        const updatedBook = await bookModel.findByIdAndUpdate(id, req.body, {new : true})
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message : error.message})
    }
})

// find book through category in database
app.get('/book', async (req, res) => {
    try {
        const {category} = req.query
        const query = {}
        if (category) query.category = category
        const books = await bookModel.find(query)
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({ message : error.message })
    }
})