// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  let search = "No Found";
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/india" element={<Home searchQuery="india" />} />
          <Route path="/business" element={<Home searchQuery="business" />} />
          <Route path="/technology" element={<Home searchQuery="technology" />} />
          <Route path="/sports" element={<Home searchQuery="sports" />} />
          <Route path="/entertainment" element={<Home searchQuery="entertainment" />} />
          <Route path="/health" element={<Home searchQuery="health" />} />
          <Route path="/science" element={<Home searchQuery="science" />} />
          <Route path="/country" element={<Home searchQuery="country" />} />
          <Route path="/Search" element={<Home searchQuery={search} />} />
          <Route path="/555" element={<Home searchQuery="Headlines" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}



export default App;
