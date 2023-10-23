import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Component.css"

function Stories({ query }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const query = query || "india"; // Use  prop or 'india' as default
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=fee9d36680b846e5b1c4aa88dc1bdc89`
      );
      const limitedData = response.data.articles.slice(0, 100);
      setData(limitedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ width: "1000px", margin: "auto" }}>   <div style={{ display: "flex", flexDirection: "row", overflowX: "auto" }}>
      {data ? (
        data.map((item, index) => (
          <div
            key={index}
            className="card-item" // Use className for styling
            style={{ margin: "10px" }} // Add margin to separate items
          >
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={item.urlToImage} alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href={item.url} className="btn btn-primary">View more</a>
              </div>
            </div>
          </div>
        ))
      ) : (
        "No results found" /* Or render a message when data is empty */
      )}
    </div></div>


  );
}

export default Stories;
