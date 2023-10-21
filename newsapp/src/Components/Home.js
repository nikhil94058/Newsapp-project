import React from "react";
import Middle from "./Middle";
import Fetchdata from "./Fetchdata";
export function Home({ searchQuery }) {
  return (
    <>
      <Middle />
      <Fetchdata searchQuery={searchQuery} />
    </>
  );
}
export default Home;