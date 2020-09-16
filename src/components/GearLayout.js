import React from "react";

export const GearLayout = props => {
  return (
    <article>
      <section>
        <h2>{props.gearName}</h2>
        <p>{props.gearDescription}</p>
      </section>
      <img src={props.gearImage} alt="A piece of rad gear." />
    </article>
  );
};
