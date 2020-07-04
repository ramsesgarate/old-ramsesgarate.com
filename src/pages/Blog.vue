<template>
  <Layout>

    <section class="blog">
      <h1>Blog</h1>
      <p>Artículos, tutoriales, fragmentos, reflexiones y todo lo demás.</p>
      <input type="search" placeholder="Busca tu publicación...">
    </section>

    <section>
      <PostList :posts="$page.posts.edges"/>
    </section>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY" locale: "es-ES")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostList from '~/components/PostList.vue'

export default {
  components: {
    PostList
  },
  metaInfo: {
    titleTemplate: 'Articulos - %s'
  }
}
</script>


<style>

</style>
