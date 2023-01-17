import React from "react";
import Random from "../components/Random";
import Loading from "../components/Loading";

const RandomCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  // React.useEffect(() => {
  //   fetchRandom();
  // }, []);

  return (
    <section className="section cocktail-section">
      <Link to="/" className="all-btns">
        Home
      </Link>
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

export default RandomCocktail;
