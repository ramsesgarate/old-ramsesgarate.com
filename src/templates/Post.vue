<template>
  <Layout>
    <section class="">
      <ClientOnly>
        <read-progress color="#275EFE" opacity="0.5"></read-progress>
      </ClientOnly>

      <post-header 
        :title="$page.post.title"
        :date="$page.post.dateFormat"
        :time-to-read="$page.post.timeToRead"
        :cover-image="$page.post.cover_image"
      />

      <post-body
        :content="$page.post.content" 
      />

      <post-footer
        :edit-link="editLink"
        :tags="$page.post.tags"
        :previous-page="previousPage" 
        :next-page="nextPage"
      />
    </section>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    fileInfo {
      path
    }
    path
    author
    date
    dateFormat: date (format: "D. MMMM YYYY" locale: "es-ES")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (blur: 5)
  }
}
</page-query>

<script>
// Layout
import Layout from '~/layouts/Default'

//Components
import PostBody from '~/components/PostBody'
import PostHeader from '~/components/PostHeader'
import PostFooter from '~/components/PostFooter'

import postLinks from '~/data/post-links.yaml'

export default {
  components: {
    Layout,
    PostBody,
    PostHeader,
    PostFooter,
    ReadProgress: () =>
      import ('vue-read-progress')
      .then(m => m.default)
      .catch()
  },
  computed: {
    coverImage() {
      let coverImage = "";
      const cover = this.$page.post.cover_image;
      if (cover.src) {
        return coverImage = `https://ramsesgarate.com${this.$page.post.cover_image.src}`;
      }
    },
    postLinks(){
      return postLinks;
    },
    currentIndex () {
      return this.postLinks.findIndex(item => {
        return item.link.replace(/\/$/, '') === this.$route.path.replace(/\/$/, '')
      })
    },
    nextPage () {
      return this.postLinks[this.currentIndex + 1]
    },
    previousPage () {
      return this.postLinks[this.currentIndex - 1]
    },
    editLink () {
      return `https://github.com/ramsesgarate/ramsesgarate.com/blob/master/${this.$page.post.fileInfo.path}`
    },
  },
  metaInfo () {
    return {
      meta: [
        { name: "description", content: this.$page.post.description },

        // Some Open Graph Tags
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.$page.post.description },
        { property: "og:image", content: this.coverImage },
        { property: "og:locale", content: "es_419" },{
          property: "og:url",
          content: "https://ramsesgarate.com/ " + this.$page.post.path
        },

        // Some Twitter Cards Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://ramsesgarate.com/" },
        { name: "twitter:site", content: "@ramsesgarate" },
        { name: "twitter:creator", content: "@ramsesgarate" },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:image", content: this.coverImage },
        { name: "twitter:description", content: this.$page.post.description }
      ],
      //Some ld+json tags
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "description": this.$page.post.description,
            "datePublished": this.$page.post.date,
            "author": {
              "name": this.$page.post.author,
              "@type": "Person"
            },
            "headline": this.$page.post.title,
            "image": this.coverImage,
            "dateModified": this.$page.post.date_update,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://ramsesgarate.com/blog/"
            },
            "publisher": {
              "@type": "Person",
              "name": "Ramses Garate",
              "logo": {
                "@type": "ImageObject",
                "url": "src/favicon.png"
              }
            }
          }
        }
      ],
      title: this.$page.post.title
    }
  }
}
</script>