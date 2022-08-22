module.exports = {
  siteMetadata: {
    title: `Jeffrey Ren's portfolio_2022`,
    siteUrl: `https://www.https://jeffreyren.com`,
    description: `Portfolio for Jeffrey Ren. Jeffrey is a FullStack Developer specializing in acceessible E-commerce Solutions`,
    image: `/gatsby-icon.png`,
  },
  plugins: ['gatsby-plugin-postcss',"gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Roboto']
      }
    }
  }
]
};