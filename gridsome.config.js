module.exports = {
  pathPrefix: '',
  siteUrl: 'https://ramsesgarate.com/',
  siteName: 'Ramses Garate',
  siteDescription: 'Soy Ramses Garate, un desarrollador FrontEnd autodidacta de 23 años',
  author: 'Ramses Garate',
  title: 'Ramses Garate',
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
  templates: {
    Post: '/blog/:path',
    Tag: '/tag/:id'
  },

  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Post',
      path: 'content/blog/*.md',
      remark: {
        autolinkHeadings: {
          behavior: 'wrap',
          content: {
            type: 'text',
            value: '#'
          }
        },

      },
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