import React from "react";
import Middle from "./Middle";
import Fetchdata from "./Fetchdata";
import { NewsBlock, NewsSection } from "./Breakingnews";
import Headlines from "./Headlines";
import Signup from "./Signup";
import "./Component.css";
import Comments from "./Comments";
import Stories from "./Stories";

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
          <Fetchdata searchQuery="india" />
        </div>
        <div className="component fetchdata-content">
          <Signup />
          <div style={{ marginTop: "100px" }}><h1 style={{ color: "orange" }}>Stocks</h1>
            <Fetchdata searchQuery="Money" /></div>
        </div>

      </div>

    </div>
  );
}

export default Home;
