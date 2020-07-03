<template>
  <Layout>
    <div class="container">
      <h1 class="tag-title text-center space-bottom">
        # {{ $page.tag.title }}
      </h1>

      <div class="posts">
        <PostList v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
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
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">

</style>

