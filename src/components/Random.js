import React from "react";
import axios from "axios";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const Random = () => {
  const { id } = useParams();
  const [randomDrink, setRandomDrink] = useState();
  const navigate = useNavigate();

  const fetchRandom = async () => {
    try {
      const { data } = await axios(url);
      console.log(data.drinks);
      setRandomDrink(data.drinks);
      console.log(data.drinks);
      navigate(`/cocktail/random`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <button onClick={fetchRandom} className="all-btns">
        Or pick a cocktail at random!
      </button>
    </div>
  );
};

export default Random;
