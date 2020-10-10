import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const IndexWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
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
      <IndexWrapper>
        <h1>Hello, Welcome to Cooking With Code</h1>
        <p>
          I'm a web developer who loves working with JavaScript. My goal is
          assist developers of all skill levels. I plan to make a video to go
          along with every blog just in case you don't care much for reading.{" "}
          <span role="img" aria-label="This is a thumbs up emoji">
            👍
          </span>
        </p>
      </IndexWrapper>
    </Layout>
  );
};
