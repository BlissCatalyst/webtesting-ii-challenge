import React from "react";

const Display = props => {
  return (
    <>
      <h2>At Bat Stats</h2>
      <h3>Strikes: {props.strike}</h3>
      <h3>Balls: {props.ball}</h3>
      <h3>Fouls: {props.foul}</h3>
    </>
  );
};

export default Display;
