<template>
  <div class="post-list">
    <g-link
      v-for="post in posts" :key="post.node.id" 
      class="post-list__link" 
      :to="post.node.path" >
        <div class="post-list__title" v-html="post.node.title" />
        <div class="post-list__meta">
          <PostDate :date="post.node.date"/>
          <PostTags :tags="post.node.tags" />
        </div>
    </g-link>
  </div>
  
</template>

<script>
import PostDate from '~/components/PostDate'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostDate,
    PostTags
  },
  props: ['posts'],
}
</script>

<style lang="scss">
</style>
