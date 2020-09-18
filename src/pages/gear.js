import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const GearWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: #fff;

  li {
    // list-style: disc;
    font-family: "Open Sans", sans-serif;
    padding: 1rem 0;
  }

  section {
    padding: 1rem 0rem;
  }

  img {
    width: 100%;
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

  // This is a bit much.
  const data = useStaticQuery(graphql`
    query gearQuery {
      laptop: file(relativePath: { eq: "laptop.jpg" }) {
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
      <GearWrapper>
        <h1>What Am I Working With You Ask?</h1>
        <Img fluid={data.laptop.childImageSharp.fluid} alt="My sick rig." />
        <p>
          Alright, so you probably aren't actually interested. Just in case:
        </p>
        &nbsp;
        <h2>Software</h2>
        <section>
          <h3>Visual Studio Code</h3> <p>Text Editor/Main Squeeze</p>
        </section>
        <section>
          <h3>Mozilla Firefox</h3> <p>My go to browser</p>
        </section>
        <section>
          <h3>Figma</h3> <p>My favorite design App</p>
        </section>
        <section>
          <h3>iTerm2</h3> <p>The sequel to iTerm. Terminal</p>
        </section>
        <section>
          <h3>ImageOptim</h3> <p>For optimizing images</p>
        </section>
        <h2>Hardware</h2>
        <section>
          <h3>
            Apple MacBook Pro 13.3 Laptop LED Intel i5 3210M 2.5GHz 4GB 500GB
          </h3>
          <p>
            A lovely piece of hardware from 2012. I bought it refurbished from
            Ebay and tossed a SSD as well as 16GB of RAM in it. I only wish it
            had a slightly better processor and a dedicated GPU.
          </p>
        </section>
        <section>
          <h3>Apple Magic Mouse 2</h3>
          <p>
            Unlike the Magic Mouse 1, this one can be charged. No batteries
            required. It was on sale.
          </p>
        </section>
        <section>
          <h3>Apple Bluetooth Wireless Mini Keyboard</h3>
          <p>
            I plan on building my own mechanical keyboard soon. This thing takes
            AA batteries. Meh.
          </p>
        </section>
        <section>
          <h3>A Blue Snowball iCE USB Mic</h3>
          <p>
            This was my old gaming microphone. I'm using it for recording until
            I can get one that plugs directly into my camera.
          </p>
        </section>
        <section>
          <h3>Sony WH-1000XM3 Noise Cancelling Headset</h3>
          <p>These things were $$$ but they cancel my noise and I love them.</p>
        </section>
        <section>
          <h3>A fold out table as a desk and a fold out chair</h3>
          <p>Purchased from Walmart. Truly the envy of every developer!</p>
        </section>
        <section>
          <h3>Burt's Bees Ultra Conditioning Moisturizing Lip Balm</h3>
          <p>
            It's rich in butters and oils that hydrate and condition dry lips.
          </p>
        </section>
      </GearWrapper>
    </Layout>
  );
};
