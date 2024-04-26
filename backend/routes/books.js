// routes/books.js

const express = require('express');
const router = express.Router();
const Book = require('../models/Book');


router.post('/books_add', async (req, res) => {
    try {
        const request = req?.body;
        let title = null;
        let author = null;
        let publicationYear = null
        if (request) {
            title = request?.title ? request?.title.trim() : null;
            author = request?.author ? request?.author.trim() : null;
            publicationYear = request?.publicationYear ? request?.publicationYear : null;
            console.log(title, "title")
            if ((title === "" || title === null || title === undefined) || (author === "" || author === null || author === undefined) || (publicationYear === "" || publicationYear === null || publicationYear === undefined)) {
                return res.json({ message: "Please enter valid filed", data: {} })
            }
            const book_details = new Book({
                title: req.body.title,
                author: req.body.author,
                publicationYear: req.body.publicationYear,

            })
            const newBook = await book_details.save();
            return res.json({ message: 'book added successfully', data: newBook })
        }
        else {
            return res.json({ message: "Please enter valid data to proceed further" })
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/book_list', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//books lists by Id
router.post('/get_book_id', async (req, res) => {
    try {
        const request = req?.body;
        let book_id = null;
        if (Object.keys(request).length > 0) {
            book_id = request?.book_id;
            if (book_id !== null) {
                const data = await Book.findById({ _id: book_id });
                if (data) {
                    return res.json({ message: "List Fetch Sucessfully", list: data })
                }
                else {
                    return res.json({ message: " Unable To Fetch List", list: data })
                }
            }
        }
        else {
            return res.json({ message: "Please enter valid data", list: data })
        }

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.post("/update_book", async (req, res) => {
    try {
        const request = req?.body;
        let book_id = null;
        let title = null;
        let author = null;
        let publicationYear = null
        if (Object.keys(request).length > 0) {
            book_id = request?._id;
            title = request?.title ? request?.title : "";
            author = request?.author ? request?.author : ""
            publicationYear = request?.publicationYear ? request?.publicationYear : ""
            const payload = {
                title,
                author,
                publicationYear
            }
            if (book_id !== null && Object.keys(payload).length > 0) {
                const data = await Book.findByIdAndUpdate({ _id: book_id }, payload);
                if (data) {
                    return res.json({ message: "Data updated successfully", list: data })
                }
                else {
                    return res.json({ message: " Unable To update data", list: data })
                }
            }
        }
        else {
            return res.json({ message: "Please enter valid data", list: data })
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.post("/delete_book", async (req, res) => {
    try {
        const request = req?.body;
        let book_id = null;
        if (Object.keys(request).length > 0) {
            book_id = request?._id;
            if (book_id !== null) {
                const data = await Book.deleteOne({ _id: book_id });
                if (data) {
                    return res.json({ message: "Data Delete successfully", list: [] })
                }
                else {
                    return res.json({ message: " Unable To Delete data", list: [] })
                }
            }
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;
