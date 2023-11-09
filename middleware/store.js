const defaultList = require('../utils/constants');
const Book = require('../models/book');

const store = {
  books: [],
};

// title, description, authors, favorite, fileCover, fileName, fileBook,
defaultList.forEach((book) => {
  store.books.push(new Book(book));
});

module.exports = store;
