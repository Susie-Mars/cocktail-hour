import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
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
            info,
            category,
            glass,
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

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }
  console.log();

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
    measures,
  } = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="all-btns">
        Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data"> name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data"> category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data"> info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data"> glass:</span>
            {glass}
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

export default SingleCocktail;
