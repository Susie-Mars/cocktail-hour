import React from "react";
import { Link } from "react-router-dom";
import drunk from "../images/drunk.jpg";

const Error = () => {
  return (
    <section className="section error-page d-flex justify-content-center flex-column m-3 text-center">
      <div className="error-container">
        <h1 className="mt-2 gap-3">
          This doesn't exist. I think it's time for you to go home.
        </h1>
        <img src={drunk} alt="drunk" className="error-img"></img>
        <br />
        <Link to="/" className="all-btns">
          home
        </Link>
      </div>
    </section>
  );
};

export default Error;
