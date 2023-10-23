import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Component.css"; // Import your CSS file with the heading styles
import Stories from "./Stories";

function Headlines({ searchQuery }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Number of items to display per page
  const scrollContainerRef = useRef(null);

  const fetchData = async () => {
    try {
      const query = searchQuery || "india";
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=fee9d36680b846e5b1c4aa88dc1bdc89`
      );
      const limitedData = response.data.articles.slice(0, 20);
      setData(limitedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: (newPage - 1) * itemsPerPage * 300, // Adjust the width of each item as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="heading-container"> {/* Apply the CSS class for the heading container */}
      <div className="heading-content">
        <div className="scrollable-content" ref={scrollContainerRef}>
          {data.length > 0 ? (
            data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
              <div
                key={index}
                className="w-64 h-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 card"
              >
                <div className="card-content">
                  <h1 className="text-xl font-semibold py-2">{item.title}</h1>
                  <div className="image-container">
                    <img src={item.urlToImage} alt="" className="card-image" />
                  </div>
                  <p className="py-2">{item.description}</p>
                  <a href={item.url} target="_blank" className="text-blue-500 hover:underline inline-block py-2">
                    View more..
                  </a>
                  <footer className="py-2">
                    {item.author} <br /> {item.publishedAt}
                  </footer>
                </div>
                <br />
              </div>
            ))
          ) : "No results found"}
        </div>
        <div className="pagination-container" > {/* Apply this class to the pagination container */}
          {data.length > 0 && (
            <div className="pagination d-flex justify-content-center align-items-center mt-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${currentPage === 1 ? 'disabled' : 'btn btn-primary'}`}
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage * itemsPerPage >= data.length}
                className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${currentPage * itemsPerPage >= data.length ? 'disabled' : 'btn btn-primary'}`}
              >
                Next
              </button>
            </div>



          )}
        </div>
      </div>
      <Stories />
    </div>
  );
}

export default Headlines;
