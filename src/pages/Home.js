import React from "react";
import CocktailList from "../components/CocktailList";
import CocktailSearch from "../components/CocktailSearch";

const Home = () => {
  return (
    <main>
      <CocktailSearch />
      <CocktailList />
    </main>
  );
};

export default Home;
