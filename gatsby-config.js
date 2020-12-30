module.exports = {
  siteMetadata: {
    title: `Azmarie Wang`,
    author: `Azmarie Wang`,
    description: `Azmarie Wang's personal blog`,
    siteUrl: `https://azmarie.github.io/`,
    social: {
      github: `azmarie`,
      linkedin: `azmarie-yuxin-wang/`,
      medium: `azmariewang`,
      instagram: `azmarie_yx`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/talks`,
        name: `talks`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              backgroundColor: `transparent`,
              withWebp: true,
              showCaptions: true,
              quality: 80,
            },
          },
          {
            resolve: `@weknow/gatsby-remark-twitter`,
            options: {
              align: `center`,
            },
          },
          `gatsby-remark-embed-video`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-code-titles`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-external-links`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-135472857-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Azmarie Wangl`,
        short_name: `Azmarie Wangl`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff7a60`,
        display: `minimal-ui`,
        icon: `content/assets/donut-solid.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: { logo: './static/favicon.png' },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: { id: `ldl2nlv` },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`, // must be last
  ],
};
