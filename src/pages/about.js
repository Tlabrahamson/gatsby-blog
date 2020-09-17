import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const AboutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 50%;
    padding-bottom: 2rem;
  }

  section {
    padding-bottom: 2rem;
  }
`;

export default () => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername
  } = useSiteMetadata();

  const data = useStaticQuery(graphql`
    query aboutQuery {
      timbo: file(relativePath: { eq: "timbo.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

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
          <p>The name is Tim. Tim Abrahamson.</p>
        </section>
        <Img
          fluid={data.timbo.childImageSharp.fluid}
          alt="A placeholder for query test"
        />
        <section>
          <h1>A lot About Myself</h1>
          <p>
            I'm Tim Abrahamson. I'm a web developer based in Birmingham, AL. I
            got into coding in high school where I took a couple Java courses.
            After graduating, I started working at Jimmy John's where I became a
            sandwich master.
          </p>
        </section>
      </AboutWrapper>
    </Layout>
  );
};
