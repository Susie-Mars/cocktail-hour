import React from "react";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const RandomCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
          ];
          const measures = [
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
          ];
          const newCocktail = {
            name,
            image,
            instructions,
            ingredients,
            measures,
          };
          setCocktail(newCocktail);
          console.log(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  function refreshPage() {
    window.location.reload(false);
  }

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  const { name, image, instructions, ingredients, measures } = cocktail;
  return (
    <section className="section cocktail-section">
      <button onClick={refreshPage} className="all-btns">
        Don't like it? Try again!
      </button>
      <h1 className="section-title">
        <strong>{name}</strong>
      </h1>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data"> name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data"> instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data"> ingredients:</span>
            <div className="d-flex ">
              <div>
                {measures.map((item, index) => {
                  return item ? (
                    <span key={index} className="d-flex flex-column">
                      {item}
                    </span>
                  ) : null;
                })}
              </div>
              <div>
                {ingredients.map((item, index) => {
                  return item ? (
                    <span key={index} className="d-flex flex-column">
                      {item}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RandomCocktail;
