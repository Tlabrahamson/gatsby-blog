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

  section {
    padding-bottom: 2rem;
  }
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
        <section>
          <h1>A Little About Myself</h1>
          <p>I'm Tim. Tim Abrahamson.</p>
        </section>
        <section>
          <h1>A lot About Myself</h1>
          <p>
            The name is Tim Abrahamson. I'm a web developer based in Birmingham,
            AL. I got into developing in high school where I took a couple Java
            courses that were offered.
          </p>
        </section>
      </AboutWrapper>
    </Layout>
  );
};
