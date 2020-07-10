<template>
  <Layout>
    <section class="">
      <div class="post-header">
        <h1>
          {{ $page.post.title }}
        </h1>
        <div class="info-post">
          <div class="info-data">
            <p>Ramses Garate</p>
            <span class="meta-post">
              <post-date :date="$page.post.date" label/>
              <span class="meta-dot"> • </span>
              <span class="time-lecture"> {{$page.post.timeToRead}} min de lectura</span>
            </span>
          </div>
        </div>
      </div>

      <div class="post content-box">
        <div class="post__header">
          <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
        </div>
        <div class="post__content" v-html="$page.post.content" />
      </div>
      <div class="post-footer">
        <link-edit-page :edit-link="editLink"/>
        <post-tags :tags="$page.post.tags" />
        <post-nav-footer :previous-page="previousPage" :next-page="nextPage"/>
      </div>
    </section>
  </Layout>
</template>

<script>
import LinkEditPage from '~/components/LinkEditPage'
import PostDate from '~/components/PostDate'
import PostTags from '~/components/PostTags'
import PostNavFooter from '~/components/PostNavFooter'
import postLinks from '~/data/post-links.yaml'

export default {
  components: {
    LinkEditPage,
    PostDate,
    PostTags,
    PostNavFooter
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
    currentPath () {
      return this.postLinks[this.currentIndex].link.slice(0,-1)
    },
    editLink () {
      return `https://github.com/ramsesgarate/ramsesgarate.com/blob/master/content${this.currentPath}.md`
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

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
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
