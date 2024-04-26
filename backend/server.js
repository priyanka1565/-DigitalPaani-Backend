// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// MongoDB configuration
const db = 'mongodb+srv://priyankaingle250:priya1565@cluster0.zrm5cra.mongodb.net/crud_application'; // Change this to your MongoDB URI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const books = require('./routes/books');

app.use('/books', books);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
