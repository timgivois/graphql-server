const books = require("./books.json");
const authors = require("./authors.json");

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello world!";
  },
  book: (params) => {
    const book = books.filter(
      (book) => Number.parseInt(book.id) === Number.parseInt(params.id)
    );
    return book.length ? book[0] : null;
  },
  author: (params) => {
    const author = authors.filter(
      (author) => Number.parseInt(author.id) === Number.parseInt(params.id)
    );
    return author.length ? author[0] : null;
  },
};

module.exports = root;
