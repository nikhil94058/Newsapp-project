import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetchdata({ searchQuery }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const query = searchQuery || 'india'; // Use searchQuery prop or 'tesla' as default
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2023-09-21&sortBy=publishedAt&apiKey=fee9d36680b846e5b1c4aa88dc1bdc89`);
      const limitedData = response.data.articles.slice(0, 20);
      setData(limitedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  const onSearch = (search) => {
    fetchData.searchQuery = search;
  }
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <div className="container my-2">
      {loading ? (
        "Loading"
      ) : (
        data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <a
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover-bg-gray-100 dark-border-gray-700 dark-bg-gray-800 dark-hover-bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md-w-48 md-rounded-none md-rounded-l-lg"
                  src={item.urlToImage}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark-text-white">
                    {item.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark-text-gray-400">
                    {item.description}
                  </p>
                </div>
              </a>
            </div>
          ))
        ) : "No results found" /* Or render a message when data is empty */
      )}
    </div>
  );
}

export default Fetchdata;
