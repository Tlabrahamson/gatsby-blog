import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const GearWrapper = styled.main`
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
      <GearWrapper>
        <h1>What Am I Working On You Ask?</h1>
        <p>
          Alright, so you probably don't actually care. Just in case, this is a
          list of gear that I am currently working with.
        </p>
        &nbsp;
        <h2>My Laptop</h2>
        <p>A 2012 Macbook Pro. A lovely piece of hardware.</p>
        &nbsp;
        <h2>My Mouse</h2>
        <p>An Apple Magic Mouse 2.</p>
        &nbsp;
        <h2>My Keyboard</h2>
        <p>
          Apple Bluetooth Wireless Mini Keyboard. My plan is to build my own
          mechanical keyboard.
        </p>
        &nbsp;
        <h2>My Microphone</h2>
        <p>A Blue Snowball iCE USB Mic.</p>
        &nbsp;
        <h2>My Headphones</h2>
        <p>Sony WH-1000XM3 Noise Cancelling Headset.</p>
        &nbsp;
        <h2>My Desk and Chair</h2>
        <p>
          I am currently using a fold out table as a desk...and a fold out
          chair. Dream setup!
        </p>
      </GearWrapper>
    </Layout>
  );
};
