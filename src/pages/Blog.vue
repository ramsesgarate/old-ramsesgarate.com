<template>
  <Layout>

    <section class="blog">
      <h1>Blog</h1>
      <p>Artículos, tutoriales, fragmentos, reflexiones y todo lo demás.</p>
      <!-- <input id="search" type="search" name="search" placeholder="Busca tu publicación..."> -->
      <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search">
    </section>

    <section>
      <PostList :posts="allPost"/>
    </section>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        title
        date (format: "D. MMMM YYYY" locale: "es-ES")
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
  },
    data: () => ({
    searchTerm: ''
  }),
  computed: {
    allPost () {
      const searchTerm = this.searchTerm
      if (searchTerm.length){
        return this.$search.search({ query: searchTerm })
      } else {
        return this.$page.posts.edges
      }
    }
  }
}
</script>


<style>

</style>
