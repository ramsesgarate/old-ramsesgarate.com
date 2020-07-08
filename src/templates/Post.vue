<template>
  <Layout>
    <section class="">
      <div class="post-header">
        <h1>
          {{ $page.post.title }}
        </h1>
        <div class="info-post">
          <div class="author-avatar">
            <g-link to="/" class="avatar">
              <g-image 
                src="~/assets/images/IMG_20200707_163458.jpg" 
                alt="Profile Author" 
                quality="70"
                ></g-image>
            </g-link>
          </div>
          <div class="info-data">
            <p>Ramses Garate</p>
            <span class="meta-post">
              <span class="date">Publicado {{$page.post.date}}.</span>
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

        <PostTags :tags="$page.post.tags" />
      </div>

    </section>
    

  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
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

<style lang="scss">

</style>
