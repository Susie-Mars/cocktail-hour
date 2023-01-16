import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name}></img>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <Link to={`/cocktail/${id}`} className="all-btns">
          get recipe
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
