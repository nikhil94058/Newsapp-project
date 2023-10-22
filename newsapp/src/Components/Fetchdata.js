import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Component.css"

function Fetchdata({ searchQuery }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const query = searchQuery || "india"; // Use searchQuery prop or 'india' as default
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

  return (
    <div className="flex justify-center items-center h-screen">
      {data ? (
        data.map((item, index) => (
          <div
            key={index}
            className="w-64 h-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 card"
            style={{
              width: "100%",
              margin: "20px",
              border: "5px solid #007bff",
              cursor: "pointer",
              transition: "border-color 0.4s ease-in-out-up",
            }}
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
          </div>
        ))
      ) : (
        "No results found" /* Or render a message when data is empty */
      )}
    </div>


  );
}

export default Fetchdata;
