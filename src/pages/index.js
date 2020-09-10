import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const IndexWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  padding: 4rem 2rem;
`;

const PostWrapper = styled.div``;

const PostContent = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-gap: 2rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const PostDate = styled.p`
  color: #000;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 600;
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
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <PostContent>
              <Link to={fields.slug}>
                {!!frontmatter.cover ? (
                  <Img sizes={frontmatter.cover.childImageSharp.sizes} />
                ) : null}
              </Link>
              <div>
                <PostDate>{frontmatter.date}</PostDate>
                <Link to={fields.slug}>
                  <h1>{frontmatter.title}</h1>
                </Link>
                <p>{excerpt}</p>
              </div>
            </PostContent>
            <hr />
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
