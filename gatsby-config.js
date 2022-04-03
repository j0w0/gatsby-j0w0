module.exports = {
  siteMetadata: {
    title: `j0w0`,
    description: `Hi, I'm Josh. I am a Front-End Engineer and these are a few of my projects.`,
    author: `Josh Woodcock`,
    siteUrl: `https://www.j0w0.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://j0w0api.local/graphql`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          backgroundColor: `transparent`,
          placeholder: `dominantColor`,
          quality: 50,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `j0w0-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/j0w0-icon.png`,
      },
    },
  ],
}
