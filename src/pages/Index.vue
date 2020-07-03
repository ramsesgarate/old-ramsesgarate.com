<template>
    <Layout :show-logo="false">

      <Author/>

      <div class="container front-page">
        <section class="section">
          <h2>
            Ultimos articulos
            <g-link to="/blog" class="view-all">
              View all
            </g-link>
          </h2>
          <PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
        </section>

        <section class="section">
          <h2>
            Mas populares
            <g-link to="/categories/popular" class="view-all">
              View all
            </g-link>
          </h2>
          <PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
        </section>
      </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
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
import Author from '~/components/Author.vue'
import PostList from '~/components/PostList.vue'

export default {
  components: {
    Author,
    PostList
  },
  metaInfo: {
    titleTemplate: '%s - FrontEnd Developer'
  }
}
</script>

<style>


</style>
