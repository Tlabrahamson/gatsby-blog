import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const PostContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled(Img)`
  border-radius: 5px;
  width: 300px;
  margin-right: 2rem;
`;

const PostTitle = styled.h1`
  color: #000;
`;

const PostBody = styled.p`
  color: #000;
  font-family: sans-serif;
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
                  <Image sizes={frontmatter.cover.childImageSharp.sizes} />
                ) : null}
              </Link>
              <div>
                <PostDate>{frontmatter.date}</PostDate>
                <Link to={fields.slug}>
                  <PostTitle>{frontmatter.title}</PostTitle>
                </Link>
                <PostBody>{excerpt}</PostBody>
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
