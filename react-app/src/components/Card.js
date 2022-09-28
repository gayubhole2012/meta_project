import React from "react";

function Card(props) {
  return (
      <div calssName="card">
          <h2>first card{props.h2}</h2>
          <h3>{props.h3}</h3>
          </div>
  );
}

export default Card;