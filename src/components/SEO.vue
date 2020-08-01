<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        { name: "description", content: this.$page.post.description },

        // Some Open Graph Tags
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.$page.post.description },
        { property: "og:image", content: this.$page.post.cover_image },
        {
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$page.post.path
        },

        // Some Twitter Cards Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:image", content: this.$page.post.cover_image },
        { name: "twitter:description", content: this.$page.post.description }
      ],
      //Some ld+json tags
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            description: this.$page.post.description,
            datePublished: this.$page.post.date,
            author: {
              name: this.$page.post.author
            },
            headline: this.$page.post.title,
            image: this.$page.post.cover_image,
          }
        }
      ]
    };
  }
};
</script>