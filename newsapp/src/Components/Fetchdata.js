import React, { useEffect, useState } from "react";
import axios from "axios";


function Fetchdata({ searchQuery }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const query = searchQuery || "india"; // Use searchQuery prop or 'india' as default
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&from=2023-09-21&sortBy=publishedAt&apiKey=fee9d36680b846e5b1c4aa88dc1bdc89`
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
    <div>
      {loading ? (
        "Loading"
      ) : (
        data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="w-64 h-64 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
              style={{
                width: "80%",
                marginLeft: "10%", marginTop: "5%",
                border: "5px solid #000", // Adjust the border color and style as needed
                cursor: "grab", // Change the cursor to a pointer on hover
                transition: "border-color 0.3s ease-in-out", // Smooth transition for the border color change

              }}
            >
              <h1 className="text-xl font-semibold py-2">{item.title}</h1>
              <img src={item.urlToImage} alt="" style={{ width: "100%" }} />
              <p className="py-2">{item.description}</p>
              <a href={item.url} target="_blank" className="text-blue-500 hover:underline inline-block py-2">
                View more..
              </a>
              <footer className="py-2">
                {item.author} <br /> {item.publishedAt}
              </footer>
            </div>


          ))
        ) : "No results found" /* Or render a message when data is empty */
      )}
    </div>
  );
}

export default Fetchdata;
