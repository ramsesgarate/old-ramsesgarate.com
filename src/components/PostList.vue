<template>
  <div class="post-list">
    <g-link
      v-for="post in posts" :key="post.node.id" 
      class="row post-list__link" 
      :to="post.node.path" >
        <div class="post-list__title " v-html="post.node.title" />
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
  props: {
    posts: {
      type: Array
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/style/base/variables.scss';

.post-list__link {
  padding: 16px 15px;
  border-radius: 6px;
  margin-bottom: 16px;
  color: $font-color;
  flex-direction: column;

  & .post-list__title {
    margin: 0 0 8px 0;
    font-weight: 600;
    font-size: 1.2rem;
  }

  & .post-list__meta {
    display: flex;
    justify-content: space-between;
    font-size: .8rem;
    align-items: center;
  }

  &:hover {
    background-color: #f1f3f5;
  }
}
</style>
