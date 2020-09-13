import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const FourOhFourWrapper = styled.main`
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
      <FourOhFourWrapper>
        <h1>Uh oh!</h1>
        <p>You just hit a 404.</p>
        <p>
          The page doesn't exist. If you think that it should{" "}
          <Link to="/contact">please contact me.</Link>
        </p>
      </FourOhFourWrapper>
    </Layout>
  );
};
