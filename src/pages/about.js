import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const AboutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export default ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <AboutWrapper>
        <h1>A Little About Myself</h1>
        <p>
          The name is Tim Abrahamson. I was exposed to coding in high school. I
          took a couple of Java programming courses and while I didn't fully
          grasp it, I enjoyed it. I was under the impression that you had to
          have a college degree to pursue a career in tech so my interest
          fizzled out.{" "}
          <span role="img" aria-label="This is an emoji that is shocked.">
            😦
          </span>{" "}
          I didn't have the funds and wanted to avoid the debt of a college
          education.{" "}
          <span
            role="img"
            aria-label="This is an emoji that is down in the dumps."
          >
            😞
          </span>
        </p>
        &nbsp;
        <h1>A New Hope</h1>
        <p>
          Fast forward through a nine year stretch in the fast food industry, my
          fiance encouraged me to pursue my dream! I started to learn web
          development through freecodecamp.org and my love was revived. I
          enrolled in a 19 week program on full stack web development at a local
          community college and began to learn even more. After receiving the
          certification, I landed a 3 month internship with Kinetic
          Communications in Birmingham, AL.
        </p>
        &nbsp;
        <p>
          Once the three month period expired, I was able to get a handful of
          freelance gigs and now I am here! I am actively seeking a full time
          developer position.
        </p>
        &nbsp;
        <p>
          I Am Ready!{" "}
          <span role="img" aria-label="Two hand up emoji">
            🙌
          </span>
        </p>
      </AboutWrapper>
    </Layout>
  );
};
