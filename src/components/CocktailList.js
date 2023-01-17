import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">Sorry, no cocktails matched your search</h2>
    );
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <Link to="random" className="all-btns">
          Or pick a cocktail at random!
        </Link>
      </div>
      <section className="section">
        <div className="cocktails-center">
          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default CocktailList;
