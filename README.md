 ## Project Title : CRUND OPERATIONS FOR MANAGING BOOKS
## Introduction
A CRUD application is a fundamental type of software that performs four key operations: Create, Read, Update, and Delete. These operations are typically associated with managing data within a database or any other storage system.

## Project Type
| Backend |

## Directory Structure


## Features
## List out the key features of your application.

## Create: Users can add new product to the system by providing details such as title, author, publicationYear.
## Read: Users can view a list of all product available in the product, along with their details.
## Update: Users can edit product information such as title, category, price, quantity, etc.
## Delete: Users can remove product from the system that are no longer available or relevant.
## Delete: Users can filter the product from the system based author and publicationYear.


## design decisions or assumptions
## Technology Stack Selection:

Chose Node.js with Express.js for the backend due to its lightweight and efficient nature, making it suitable for building RESTful APIs. Selected MongoDB as the database for its flexibility, scalability, and ease of integration with Node.js applications. Opted for a frontend framework like React.js for a dynamic and interactive user interface. RESTful API Design:

Designed the backend API following RESTful principles for resource-based routing and standardized endpoints (e.g., GET /books, POST /books/books_add, PUT /books/update_book, FILTER books/get_book_id,  DELETE /books/:id,). User Authentication:


Designed MongoDB schemas for books, title, author, publicationYear to represent the structure of data in the database. Established relationships between entities (e.g., one-to-many relationship between books and authors) using references or embedding as per requirements. Validation and Error Handling:

5.Implemented validation checks on user inputs to ensure data integrity and prevent invalid data from being saved to the database. Implemented error handling middleware to catch and handle errors gracefully, providing meaningful error me

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

## npm install express, mongoose, nodemon
## npm start

## APIs Used
If your application relies on external APIs, document them and include any necessary links or references.

## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.

For Books
## Create a new product
Method : POST
## API : http://localhost:5000/books/books_add
## Request :
{
    "title":"tityle1",
    "author":"publicationYear",
    "publicationYear":2001
}
## Response :
 {
    "message": "book added successfully",
    "data": {
        "title": "tityle1",
        "author": "publicationYear",
        "publicationYear": 2001,
        "_id": "662a9787820e74c53707cd22",
        "__v": 0
    }
}

## Get all products
Method : GET
## API : http://localhost:5000/books/book_list
Request :
Response :
{
    "message": " Books getSuccessfully ",
    "list": [
        {
            "_id": "662a9370b929adc744e0b19f",
            "title": "wings of fire",
            "author": "A.P.J. Kalam",
            "publicationYear": 2001,
            "__v": 0
        },
        {
            "_id": "662a93c4635ad1af42f33c54",
            "title": "wings of fire",
            "author": "A.P.J. Kalam",
            "publicationYear": 2001,
            "__v": 0
        },
        {
            "_id": "662a96281a112c398a8e2abd",
            "title": " ",
            "author": "A.P.J. Kalam",
            "publicationYear": 2001,
            "__v": 0
        },
        {
            "_id": "662a9787820e74c53707cd22",
            "title": "tityle1",
            "author": "publicationYear",
            "publicationYear": 2001,
            "__v": 0
        }
    ]
}

## Get a single product by ID
Method : GET
## API : http://localhost:5000/books/get_book_id

## Request :
{
    "book_id":"662a9327b929adc744e0b19d"
}

## Response
{
    "message": "List Fetch Sucessfully",
    "list": {
        "_id": "662a9327b929adc744e0b19d",
        "title": "wings of fire update",
        "author": "A.P.J. Kalam update",
        "publicationYear": 2008,
        "__v": 0
    }
}

## Filter the product using author and publicationYear
Method : FILTER
## API : http://localhost:5000/books/book_list

## Request :
{
    "_id": "662a9370b929adc744e0b19f",
    "title": "",
    "author": "",
    "publicationYear": "",
    "__v": 0

}

## Response :
{
    "message": " Books getSuccessfully ",
    "list": [
        {
            "_id": "662a9370b929adc744e0b19f",
            "title": "wings of fire",
            "author": "A.P.J. Kalam",
            "publicationYear": 2001,
            "__v": 0
        },
        {
            "_id": "662a93c4635ad1af42f33c54",
            "title": "wings of fire",
            "author": "A.P.J. Kalam",
            "publicationYear": 2001,
            "__v": 0
        },
        {
            "_id": "662a96281a112c398a8e2abd",
            "title": " ",
            "author": "A.P.J. Kalam",
            "publicationYear": 2001,
            "__v": 0
        },
        {
            "_id": "662a9787820e74c53707cd22",
            "title": "tityle1",
            "author": "publicationYear",
            "publicationYear": 2001,
            "__v": 0
        }
    ]
}


## Delete a single product by ID
Method : DELETE
## API : http://localhost:5000/books/delete_book

## Request :
{ 
    "_id": "662a9327b929adc744e0b19d",

}

## Response :
{
    "message": "Data Delete successfully",
    "list": []
}


## Technology Stack
Node.js
Express.js
MongoDB
Other libraries/modules