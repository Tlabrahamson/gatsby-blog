import React from "react";
import Img from "gatsby-image";

export const GearLayout = props => {
  return (
    <article>
      <section>
        <h3>{props.gearName}</h3>
        <p>{props.gearDescription}</p>
      </section>
      <Img fluid={props.gearImage} alt="A piece of rad gear." />
    </article>
  );
};
