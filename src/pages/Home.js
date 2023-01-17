import React from "react";
import CocktailList from "../components/CocktailList";
import CocktailSearch from "../components/CocktailSearch";
import Random from "../components/Random";

const Home = () => {
  return (
    <main>
      <CocktailSearch />
      <Random />
      <CocktailList />
    </main>
  );
};

export default Home;
