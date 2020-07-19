<template>
  <Layout>
    <section class="">
      <ClientOnly>
        <read-progress color="#275EFE" opacity="0.5"></read-progress>
      </ClientOnly>
      
      <div class="read-progress-container">
        <span class="read-progress-bar" style="width: 101.899%; color: rgb(72, 184, 132); height: 4px; opacity: 0.5; background-color: rgb(72, 184, 132);"></span>
      </div>
      <post-header 
        :title="$page.post.title"
        :date="$page.post.date"
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
    date (format: "D. MMMM YYYY" locale: "es-ES")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'
import postLinks from '~/data/post-links.yaml'
import PostBody from '~/components/PostBody'
import PostHeader from '~/components/PostHeader'
import PostFooter from '~/components/PostFooter'

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
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.read-progress-container{
      width: 100%;
    background-color: transparent;
    position: fixed;
    display: block;
    z-index: 9999;
    top: 0;
    left: 0;
}
</style>