import React, { useState } from "react";
import "./Home.css"

const Home = () => {
  const [searchInput, setSearchInput] = useState(""); // State variable to store the search input value

  const handleSearch = () => {
    // Implement your search logic here, e.g., fetch data based on the searchInput
    console.log("Searching for:", searchInput);
    // You can make an API call with Axios or fetch data here
  };

  return (
    <div className="container">
      <h1 className="text-2xl text-orange mb-4">The News Application</h1>
      <p className="text-base text-gray-600 mb-4">
        Welcome to our website. Discover the latest news and updates.
      </p>
      <a href="/news" className="btn">Explore News</a>

      <div className="border-b-2 border-blue-500 p-4">
        <input
          type="text"
          className="w-full text-base py-2 border-b-2 focus:outline-none"
          placeholder="Search for news..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // Update searchInput on input change
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch(); // Trigger search on Enter key press
            }
          }}
        />
        <button
          className="w-full btn" // Make the button take full width
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
