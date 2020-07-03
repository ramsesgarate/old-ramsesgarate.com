<template>
  <Layout>
    <div class="container">
      <h1>Articulos</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
      <PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>

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
