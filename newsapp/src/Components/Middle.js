import React, { useState } from 'react';
import Fetchdata from './Fetchdata';
import Home from './Home';
import { Link } from 'react-router-dom';
import HeadlinesBar from './Headlinesbar';

function Middle({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    { <Link to="/search" /> }
  };

  return (
    <div className="container-fluid bg-dark text-white p-4 h-screen flex flex-col justify-center items-center">
      <HeadlinesBar />
      <h1 className="black-bg text-light">The News Application</h1>
      <h5 className="black-bg text-light">
        Welcome to our website. Discover the latest news and updates.
      </h5>

      <div className="input-group">
        <input
          type="text"
          placeholder="Search for news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control rounded-full py-2 px-4 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
        />
        <button
          onClick={handleSearch}
          className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 ml-2 focus:outline-none"
        >
          Search
        </button>
      </div>
    </div>
  );
}



export default Middle;
