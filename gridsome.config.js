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
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'BlogPost',
        feedOptions: {
          title: 'Ramses Garate Blog RSS Feed',
          feed_url: 'https://ramsesgarate.com/blog/rss.xml',
          site_url: 'https://ramsesgarate.com/blog/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://ramsesgarate.com/blog/' + node.slug,
          author: node.fields.author
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    }, {
      "use": "@gridsome/plugin-google-analytics",
      "options": {
        "id": "UA-172467274-1"
      }
    }, {
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
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/tag/*'],
        config: {
          '/blog/*': {
            changefreq: 'daily',
            priority: 0.7,
          },
          '/about': {
            changefreq: 'daily',
            priority: 0.7,
          }
        }
      }
    }
  ],

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