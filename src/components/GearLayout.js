import React from "react";
import Img from "gatsby-image";

export const GearLayout = props => {
  return (
    <article>
      <section>
        <h2>{props.gearName}</h2>
        <p>{props.gearDescription}</p>
      </section>
      <Img fluid={props.gearImage} alt="A piece of rad gear." />
    </article>
  );
};
