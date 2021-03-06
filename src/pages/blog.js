import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const BlogWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 4rem;

  h1 {
    color: #1d2b39;
  }

  @media screen and (max-width: 800px) {
    margin: 0;
    // grid-row-gap: 2rem;
  }
`;

const PostWrapper = styled.div`
  padding: 2rem 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
`;

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
      <BlogWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <PostContent>
              <Link to={fields.slug}>
                {!!frontmatter.cover ? (
                  <Img fluid={frontmatter.cover.childImageSharp.fluid} />
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
          </PostWrapper>
        ))}
      </BlogWrapper>
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
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
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
        fields {
          slug
        }
      }
    }
  }
`;
