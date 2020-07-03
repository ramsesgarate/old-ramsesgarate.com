<template>
  <g-link class="post-list__link" :to="post.path">
      <div class="post-list__title" v-html="post.title" />
      <div class="post-list__meta">
        <PostDate :date="post.date"/>
        <PostTags :post="post" />
      </div>
  </g-link>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostDate from '~/components/PostDate'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostDate,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-list__link {
  padding: .5rem;
  margin-bottom: .5rem;
  display: block;
  border-radius: 6px;
  margin-bottom: .3rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

}

.post-list__title {
  margin-bottom: .25rem;
  color: #333;
  font-size: 1.5rem;
}

.post-list__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #555;
  font-size: 1rem;
  
  & a {
    color: #555;
  }
}
</style>
