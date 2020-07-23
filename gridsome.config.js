module.exports = {
  pathPrefix: '',
  siteUrl: 'https://ramsesgarate.com/',
  siteName: 'Ramses Garate',
  siteDescription: 'Soy Ramses Garate, un desarrollador FrontEnd autodidacta de 23 años',
  author: 'Ramses Garate',
  title: 'Ramses Garate',
  templates: {
    Post: '/blog/:path',
    Tag: '/tag/:id'
  },

  plugins: [{
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Ramses Garate | RSS Feed',
          description: 'Soy Ramses Garate, un desarrollador FrontEnd autodidacta de 23 años',
          feed_url: 'https://ramsesgarate.com/rss.xml',
          site_url: 'https://ramsesgarate.com/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://ramsesgarate.com' + node.path,
          date: node.date
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
            linkProperties: {
              ariaHidden: false
            },
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
    }, {
      use: 'gridsome-plugin-pwa',
      options: {
        disableServiceWorker: false,
        manifestPath: 'manifest.json',
        title: 'Ramses Garate',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#275efe',
        backgroundColor: '#fcfcfc',
        icon: './src/favicon.png',
        shortName: 'RG',
        description: 'Soy Ramses Garate, un desarrollador FrontEnd autodidacta de 23 años!',
        categories: ['education'],
        lang: 'es-419',
        dir: 'auto',
        maskableIcon: true,
        msTileColor: '#275efe',
        appleMaskIcon: './src/favicon.png',
        appleMaskIconColor: '#275efe',
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