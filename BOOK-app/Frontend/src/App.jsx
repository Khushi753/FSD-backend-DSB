import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Addbook from './components/Addbook'
import Searchbook from './components/Searchbook'
import Update from './components/Update'
import View from './components/View'       
import Delete from './components/Delete'   
import './App.css';


const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/add">Addbook</Link>
          <Link to="/search">Searchbook</Link>
          <Link to="/view">View Book</Link>
          <Link to="/delete">Delete Book</Link>
          <Link to="/update">Update Book</Link>
        </nav>
        <Routes>
          <Route path="/add" element={<Addbook />} />
          <Route path="/search" element={<Searchbook />} />
          <Route path="/view" element={<View />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
