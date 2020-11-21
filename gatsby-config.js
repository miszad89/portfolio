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
    `gatsby-image`,
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
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat`, `source sans pro\:300,400,400i,700`],
        display: "swap",
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-anchor-links`,
  ],
}
