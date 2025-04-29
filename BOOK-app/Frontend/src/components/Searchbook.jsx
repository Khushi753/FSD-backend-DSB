import React, { useState } from 'react';
import axios from 'axios';
import './Searchbook.css'; // Importing the CSS file

const Searchbook = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [searchDone, setSearchDone] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('Please enter a title to search');
      return;
    }

    try {
      const res = await axios.get(`https://fsd-backend-dsb-3-76sg.onrender.com/search?title=${query}`);
      setBooks(res.data);
      setSearchDone(true); 
    } catch (error) {
      console.error(error);
      alert('Error while fetching books');
    }
  };

  return (
    <div className="search-book-container">
      <h2 className="search-book-title">Search Books</h2>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Enter book title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="results-container">
        {searchDone && books.length === 0 && <p className="no-books">No books found</p>}
        {books.length > 0 && (
          <ul className="book-list">
            {books.map((book) => (
              <li key={book._id} className="book-item">
                <strong>{book.title}</strong> by {book.author} <br />
                {book.image && <img src={book.image} alt={book.title} className="book-image" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Searchbook;
