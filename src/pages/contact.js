import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const ContactWrapper = styled.main`
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
      <ContactWrapper>
        <h1>Want To Contact Me?</h1>
        &nbsp;
        <h2>Twitter</h2>
        <p>
          One of the best ways to reach is my Twitter handle{" "}
          <Link target="_blank" to="https://twitter.com/TimAbrahamson1">
            {twitterUsername}
          </Link>
          . I should be able to respond relatively quick.
        </p>
        &nbsp;
        <h2>LinkedIn</h2>
        <p>
          Want to hire me? Just want to connect? My LinkedIn{" "}
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/tim-abrahamson-b6a34a174/"
          >
            profile
          </Link>{" "}
          could be good for that kind of thing. I remove connections that drop
          garbage posts or spam.
        </p>
        &nbsp;
        <h2>Email</h2>
        <p>
          If you want to email me, that is okay. I'm a bit slower to respond but
          the address is{" "}
          <Link href="mailto: tlabrahamson@yahoo.com">
            tlabrahamson@yahoo.com
          </Link>
          .
        </p>
      </ContactWrapper>
    </Layout>
  );
};
