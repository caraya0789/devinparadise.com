module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      "trackingIds": ["G-54L009EK0M"]
    }
  }, "gatsby-plugin-react-helmet"]
};