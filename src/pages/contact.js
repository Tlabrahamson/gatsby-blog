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
        <h2>My Twitter Handle</h2>
        <p>
          The best way to contact me is my Twitter handle{" "}
          <Link target="_blank" to="https://twitter.com/TimAbrahamson1">
            {twitterUsername}
          </Link>
          . I should be able to respond relatively quick.
        </p>
        &nbsp;
        <h2>My Email Address</h2>
        <p>
          If you want to email me, that is okay. I'm less likely to respond to
          emails. There is a good chance that I will read it though! The address
          is{" "}
          <Link href="mailto: tlabrahamson@yahoo.com">
            tlabrahamson@yahoo.com
          </Link>
          .
        </p>
      </ContactWrapper>
    </Layout>
  );
};
