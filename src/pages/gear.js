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

  article {
    display: grid;
    grid-template-columns: 1fr 50%;
    grid-column-gap: 0.5rem;
    align-items: center;
    padding: 2rem 0;
  }

  @media (max-width: 800px) {
    article {
      grid-template-columns: 1fr;
    }
  }

  img {
    width: 100%;
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
      <GearWrapper>
        <h1>What Am I Working With You Ask?</h1>
        <p>
          Alright, so you probably aren't actually interested. Just in case:
        </p>
        &nbsp;
        <GearLayout
          gearName="Apple MacBook Pro 13.3 Laptop LED Intel i5 3210M 2.5GHz 4GB 500GB"
          gearDescription="A lovely piece of hardware from 2012. I bought it refurbished from Ebay and tossed a SSD as well as 16GB of RAM in it. I only wish it had a slightly better processor and a dedicated GPU."
          gearImage={data.laptop}
        />
        <GearLayout
          gearName="Apple Magic Mouse 2"
          gearDescription="Unlike the Magic Mouse 1, this one can be charged. No batteries required. It was on sale."
          gearImage={data.mouse}
        />
        <GearLayout
          gearName="Apple Bluetooth Wireless Mini Keyboard"
          gearDescription="I plan on building my own mechanical keyboard soon. This thing takes AA batteries. Meh."
          gearImage={data.keyboard}
        />
        <GearLayout
          gearName="A Blue Snowball iCE USB Mic"
          gearDescription="This was my old gaming microphone. I'm using it for recording until I can get one that plugs directly into my camera."
          gearImage={data.mic}
        />
        <GearLayout
          gearName="Sony WH-1000XM3 Noise Cancelling Headset"
          gearDescription="These things were $$$ but they cancel my noise and I love them."
        />
        <GearLayout
          gearName="A fold out table as a desk and a fold out chair"
          gearDescription="Purchased from Walmart. Truly the envy of every developer!"
        />
        <GearLayout
          gearName="Burt's Bees Ultra Conditioning Moisturizing Lip Balm"
          gearDescription="It's rich in butters and oils that hydrate and condition dry lips."
          gearImage={data.chap}
        />
      </GearWrapper>
    </Layout>
  );
};

// Ehhh
export const query = graphql`
  query {
    chap: file(relativePath: { eq: "chap.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    keyboard: file(relativePath: { eq: "keyboard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    laptop: file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mic: file(relativePath: { eq: "mic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mouse: file(relativePath: { eq: "mouse.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
