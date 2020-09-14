import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { GearLayout } from "../components/GearLayout";
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
        <GearLayout
          gearName="My Laptop"
          gearDescription="A 2012 Macbook Pro. A lovely piece of hardware."
        />
        <GearLayout
          gearName="My Mouse"
          gearDescription="An Apple Magic Mouse 2."
        />
        <GearLayout
          gearName="My Keyboard"
          gearDescription="An Apple Bluetooth Wireless Mini Keyboard. I plan on building my own mechanical keyboard soon."
        />
        <GearLayout
          gearName="My Microphone"
          gearDescription="A Blue Snowball iCE USB Mic."
        />
        <GearLayout
          gearName="My Headphones"
          gearDescription="Sony WH-1000XM3 Noise Cancelling Headset."
        />
        <GearLayout
          gearName="My Desk and Chair"
          gearDescription="A fold out table as a desk and a fold out chair. The envy of every developer!"
        />
      </GearWrapper>
    </Layout>
  );
};
