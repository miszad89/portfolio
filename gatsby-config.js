module.exports = {
  siteMetadata: {
    title: `Michał Drankiewicz - front-end developer`,
    description: `Zajmuję się amatorsko tworzeniem stron internetowych oraz aplikacji webowych. Zobacz moje projekty, CV oraz dane kontaktowe.`,
    author: `Michał Drankiewicz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michał Drankiewicz - front-end developer`,
        short_name: `M.Drankiewicz`,
        start_url: `/`,
        background_color: `#D9D9D9`,
        theme_color: `#D9D9D9`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
