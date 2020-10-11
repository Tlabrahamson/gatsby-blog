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
  background: #fff;

  img {
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
      thru: file(relativePath: { eq: "thru.jpg" }) {
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
            I'm a web developer based in Birmingham, AL. I got into coding in
            high school where I took a couple Java courses. I loved it but
            didn't have college aspirations. After graduating, I started working
            at Jimmy John's where I made a lot of sandwiches. Making sandwiches
            day in and day out triggered a primal instinct to escape
            civilization and nomad it up. The solution? Thru hike the
            Appalachain Trail!
          </p>
        </section>
        <section>
          <h2>A Walk in the Woods</h2>
          <p>
            For 5 1/2 months I backpacked from Maine to Georgia. I watched the
            sun rise, the sun set, and the Fall colors change before my eyes.
            There were certainly hardships like waking up every morning and
            hiking 15 to 20 miles a day, but there were rewards at the top of
            every mountain. The day I completed the hike, my body was mush and I
            was ready to get back to a more familiar routine.
          </p>
        </section>
        <Img
          fluid={data.thru.childImageSharp.fluid}
          alt="A placeholder for query test"
        />
        <section>
          <h2>My Return to the Real World</h2>
          <p>
            I slipped back into the sandwich making life because it was like
            riding a bike. I knew I could do better if I tried harder.
            Everything changed when I started a family. I was blessed with twin
            boys and it was time to become something more. I started learning
            web development through freecodecamp.org. My local community college
            began offering a 19 week full stack development course and I opted
            in immediately.
          </p>
        </section>
        <section>
          <h2>Learning the Ropes</h2>
          <p>
            The course was an excellent push to learn as much as possible in my
            free time. Towards the end of the course, I started applying for
            jobs and wound up getting an internship at the amazing Kinetic
            Communications in Birmingham. The internship expired in 3 months but
            I obtained a wealth of knowledge.
          </p>
        </section>
        <section>
          <p>
            Aaaaaand that brings us to today. I do occasional freelance work and
            I am looking for my dream company.
          </p>
        </section>
      </AboutWrapper>
    </Layout>
  );
};
