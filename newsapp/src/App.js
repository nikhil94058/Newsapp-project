// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import './App.css'


function App() {
  return (
    <>hello
      <Router>
        <div className='navbar'><Navbar /></div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" component={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
