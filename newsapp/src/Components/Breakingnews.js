import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Component.css"
export function NewsBlock({ imageUrl, date, title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="position-relative">
        <img src={imageUrl} alt="News" className="w-100 h-36 h-sm-48 object-cover object-center transform scale-1 transition duration-300 hover-scale-1.05" />
        <div className="position-absolute top-0 left-0 w-100 h-100 bg-red-500 opacity-0 hover-opacity-60 transition-opacity duration-300"></div>
        <div className="position-absolute top-0 left-0 w-100 h-100 text-white text-center opacity-0 hover-opacity-100 d-flex align-items-center justify-content-center transition-opacity duration-300">
          <p className="text-lg font-weight-bold breaking-news">Breaking News</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-gray-700 text-base mb-2">{date}</div>
        <h2 className="font-weight-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="px-6 py-4">
        <a href="#" className="text-indigo-500 hover-underline text-sm font-weight-bold">
          Read More
        </a>
      </div>
    </div>


  );
}



export function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li
        key={i}
        className={`page-item${currentPage === i ? " active" : ""}`}
      >
        <a
          href="#"
          className="page-link"
          onClick={() => onPageChange(i)}
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
          <a
            href="#"
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {pages}
        <li className={`page-item${currentPage === totalPages ? " disabled" : ""}`}>
          <a
            href="#"
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}



export function NewsSection() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Number of news items to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=fee9d36680b846e5b1c4aa88dc1bdc89"
        );
        const limitedData = response.data.articles.slice(0, 5);
        setNewsData(limitedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="p-4 bg-gray-100 min-h-screen">
      {loading ? (
        "Loading..."
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {newsData
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item, index) => (
              <NewsBlock
                key={index}
                imageUrl={item.urlToImage}
                date={item.publishedAt}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalItems={newsData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
