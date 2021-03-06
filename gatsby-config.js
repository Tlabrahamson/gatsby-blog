const siteMetadata = {
  title: `Cooking With Code`,
  description: `Delicious Code Recipes`,
  image: `/favicon.svg`,
  siteUrl: `https://timabrahamson.dev`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  twitterUsername: `@timabrahamson1`,
  authorName: `Tim Abrahamson`
};
module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540
            }
          }
        ],
        plugins: [
          {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [`Redressed`, `Proza Libre`, `Open Sans`],
              display: "swap"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`
      }
    }
  ]
};
