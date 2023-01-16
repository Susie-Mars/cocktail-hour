import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page d-flex justify-content-center flex-column m-3 text-center">
      <div className="error-container">
        <h1>This doesn't exist. I think it's time for you to go home.</h1>
        <Link to="/" className="all-btns mt-5">
          home
        </Link>
      </div>
    </section>
  );
};

export default Error;
