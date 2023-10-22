import React from "react";
import Middle from "./Middle";
import Fetchdata from "./Fetchdata";
import { NewsBlock, NewsSection } from "./Breakingnews";
import Headlines from "./Headlines";
import Signup from "./Signup";
import "./Component.css";

export function Home({ searchQuery }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="middle">
        <Middle />
      </div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-gray-800 my-4">Top Headlines</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <NewsSection />
        </div>
        <div className="scrollable-container">
          <div className="content">
            <Headlines searchQuery="india" />
          </div>
        </div>
      </div>
      <div className="container-flex" >
        <div className="signup-content">
          <Signup />
        </div>
        <div className="component fetchdata-content">
          <Fetchdata searchQuery="india" />
        </div>
      </div>

    </div>
  );
}

export default Home;
