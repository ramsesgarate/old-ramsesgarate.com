
export default {
  computed: {
    baseSchema() {
      const schema = [{

        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: this.$static.metadata.organization.url,
        name: this.$static.metadata.organization.name,
        alternateName: this.$static.metadata.organization.name,
      }];

      return schema;
    },
    postSchema() {
      const schema = this.baseSchema;
      const $metaInfo = this.$parent && this.$parent.$metaInfo;
      const parentAuthor = $metaInfo && $metaInfo.author;
      const parentDate = $metaInfo && $metaInfo.date;
      const parentDateUpdate = $metaInfo && $metaInfo.dateUpdate;

      schema.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': this.metaUrl,
                name: this.metaTitle,
                image: this.metaImage,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: this.metaUrl,
          name: this.metaTitle,
          alternateName: this.metaTitle,
          headline: this.metaTitle,
          image: {
            '@type': 'ImageObject',
            url: this.metaImage,
          },
          description: this.metaDescription,
          author: {
            '@type': 'Person',
            name: parentAuthor,
          },
          publisher: {
            '@type': 'Organization',
            url: this.$static.metadata.organization.url,
            logo: this.$static.metadata.organization.logo,
            name: this.$static.metadata.organization.name,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': this.$static.metadata.canonicalUrl,
          },
          datePublished: parentDate,
          dateModified: parentDateUpdate,
        })

      return schema;
    },
    metaTitle() {
      const parentTitle = this.$parent && this.$parent.$metaInfo && this.$parent.$metaInfo.title;
      const title = parentTitle || this.$static.metadata.siteName;

      return title;
    },
    metaDescription() {
      const parentDescription = this.$parent && this.$parent.$metaInfo && this.$parent.$metaInfo.description;
      const description = parentDescription || this.$static.metadata.siteDescription;

      return description
    },
    metaKeywords() {
      const parentKeywords = this.$parent && this.$parent.$metaInfo && this.$parent.$metaInfo.keywords;
      const keywords = parentKeywords || this.$static.metadata.keywords.join(', ');

      return keywords;
    },
    metaAuthor() {
      const parentAuthor = this.$parent && this.$parent.$metaInfo && this.$parent.$metaInfo.author;
      const author = parentAuthor || this.$static.metadata.author.name;

      return author;
    },
    metaImage() {
      const siteUrl = this.$static.metadata.siteUrl;
      const logo = this.$static.metadata.image;
      const parentImage = this.$parent && this.$parent.$metaInfo && this.$parent.$metaInfo.image;
      const image = parentImage || `${siteUrl}/${logo}`;

      return image
    },
    metaUrl() {
      const path = this.$route && this.$route.path

      return `${this.$static.metadata.siteUrl}${path}`
    },
    metaSite() {
      return this.$static.metadata.twitter.site
    },
    metaCreator() {
      return this.$static.metadata.twitter.creator
    },
  },
  metaInfo() {
    return {
      meta: [
        { key: 'description', name: 'description', content: this.metaDescription },
        { key: 'keywords', name: 'keywords', content: this.metaKeywords },
        { key: 'author', name: 'author', content: this.metaAuthor },

        { key: 'og:title', property: 'og:title', content: this.metaTitle },
        { key: 'og:description', property: 'og:description', content: this.metaDescription },
        { key: 'og:image', property: 'og:image', content: this.metaImage },
        { key: 'og:type', property: 'og:type', content: 'website' },
        { key: "og:locale", property: "og:locale", content: "es_ES" },
        { key: 'og:url', property: 'og:url', content: this.metaUrl },
        this.$parent.isBlogPost ? { key: "og:type", property: "og:type", content: "article" } : '',
        // TODO: Add `article:modified_time` to let Google know when the page was last updated

        { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { key: 'twitter:title', name: 'twitter:title', content: this.metaTitle },
        { key: 'twitter:description', name: 'twitter:description', content: this.metaDescription },
        { key: 'twitter:image', name: 'twitter:image', content: this.metaImage },
        { key: 'twitter:url', name: 'twitter:url', content: this.metaUrl },
        { key: 'twitter:site', name: 'twitter:site', content: this.metaSite },
        { key: 'twitter:creator', name: 'twitter:creator', content: this.metaCreator },
      ],

      script: [{
        type: "application/ld+json",
        json: this.$parent.isBlogPost ? this.postSchema : this.baseSchema
      }],
    }
  },
}