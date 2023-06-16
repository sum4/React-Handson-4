import React from 'react'
import "./App.css";
import Home from "./Components/Home";
import Student from "./Components/Student";
import Contact from "./Components/Contact";
import { Link, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='body'>
      <div className='navBar'>
      <Link to="/" className='link'>Home</Link>
      <Link to="/student" className='link'>Students</Link>
      <Link to="/contact" className='link'>Contact US</Link>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/student' element={<Student />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  )
}

