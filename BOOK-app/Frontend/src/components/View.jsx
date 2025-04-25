import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './View.css'; 
const View = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    handleview();
  }, []);

  const handleview = async () => {
    try {
      const res = await axios.get('http://localhost:9000/books');
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="view-container">
      <h1 className="view-title">View Book Details</h1>
      
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h3 className="book-title">{book.title}</h3>
            <h4 className="book-author">{book.author}</h4>
            <p className="book-date">{book.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
