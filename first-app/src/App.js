import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return <div className="nav-bar">Rafah Library</div>;
}

function Main() {
  // Define initial state with an array of books
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030"
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479"
    },
    {
      id: 3,
      title: "الجبر والمقابلة",
      author: "الخوارزمي",
      isbn: "94837293847"
    },
    {
      id: 4,
      title: "رحلة ابن فضلان",
      author: "ابن فضلان",
      isbn: "238947238947"
    },
    {
      id: 5,
      title: "المغني",
      author: "ابن حزم",
      isbn: "329847239874"
    },
    {
      id: 6,
      title: "كتاب الخصائص",
      author: "الخوارزمي",
      isbn: "839274892374"
    }
  ]);

  return (
    <div className="books-list">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <p>Title: {book.title}</p>
          <p>ID: {book.id}</p>
          <p>Author: {book.author}</p>
          <p>ISBN: {book.isbn}</p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return <div className="footer">2024© Rafah Library</div>;
}

export default App;



