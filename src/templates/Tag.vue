<template>
  <Layout>
    <section class="tag">
      <h1 class="tag-title">
        Tag: {{ $page.tag.title }}
      </h1>
      <p><span>{{ $page.tag.belongsTo.totalCount }}</span> post encontrados</p>
    </section>
    
    <section>
      <PostList :posts="$page.tag.belongsTo.edges"/>
    </section>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      totalCount
      edges {
        node {
          ...on Post {
            title
            path
            tags {
              id
              title
              path
            }
            date (format: "D. MMMM YYYY" locale: "es-ES")
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'
import PostList from '~/components/PostList.vue'

export default {
  components: {
    Layout,
    PostList
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">
.tag p{
  font-size: 1.2rem;
  
  & span {
    color: #275efe;
  }
}
</style>

