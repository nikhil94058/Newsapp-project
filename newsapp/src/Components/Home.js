import React from "react";
import Middle from "./Middle";
import Fetchdata from "./Fetchdata";
import { Showdata } from "./Showdata";
import { NewsBlock } from "./Breakingnews";
export function Home({ searchQuery }) {
  return (
    <>
      <Middle />
      <NewsBlock
        imageUrl="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
        category="Travel"
        date="15.07.2020"
        title="This is title of the news"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid..."
      />
      <div><Fetchdata searchQuery={searchQuery} />
      </div>

    </>
  );
}
export default Home;