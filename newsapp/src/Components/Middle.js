import React, { useState } from 'react';
import Fetchdata from './Fetchdata';
import Home from './Home';
import { Link } from 'react-router-dom';

function Middle({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    { <Link to={<Home searchQuery={search} />} /> }
  };

  return (
    <div className="container-fluid bg-dark text-white">
      <h1 className="text-2xl text-orange mb-4">The News Application</h1>
      <p className="text-base text-black-600 mb-4">
        Welcome to our website. Discover the latest news and updates.
      </p>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>




    </div>
  );
}



export default Middle;
