const siteMetadata = {
  title: `A Developer Called Tim`,
  description: `This is my coding blog where I write about my coding journey.`,
  image: `/default-site-image.jpg`,
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    }
  ]
};
