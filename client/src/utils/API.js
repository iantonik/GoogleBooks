import axios from "axios";

export default {
  //Load books based on Search from Google API
  getBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  //Load books saved from database
  getSavedBooks: function () {
    return axios.get("/api/books");
  },

  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
}