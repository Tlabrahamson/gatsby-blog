import React from "react";

export const GearLayout = props => {
  return (
    <>
      <article>
        <h2>{props.gearName}</h2>
        <p>{props.gearDescription}</p>
      </article>
      <img src={props.gearImage} alt="A piece of rad gear." />
      &nbsp;
    </>
  );
};
