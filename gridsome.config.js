const config = require('./data/SiteConfig');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteUrl: config.siteUrl,
  siteName: config.siteTitle,
  siteDescription: config.siteDescription,
  author: config.author,
  title: config.siteTitle,

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Post',
      path: 'content/posts/*.md',
      refs: {
        tags: {
          typeName: 'Tag',
          create: true
        }
      }
    }
  }],

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}