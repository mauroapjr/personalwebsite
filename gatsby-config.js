require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `MauroPereira`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",

    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        trackingId: "G-K76XRD91Y5",
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
