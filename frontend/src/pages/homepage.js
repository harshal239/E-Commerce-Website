import React from "react";
import Card from "../components/Card";

const Homepage = ({ data }) => {
  return (
    <div className="card__container">
      {data.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Homepage;
