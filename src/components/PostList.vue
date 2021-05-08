<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto"
  >
    <template v-for="{ node: post } of posts">
      <post-card :key="post.id" :post="post" />
    </template>
  </div>
</template>

<script>
import PostCard from "~/components/molecules/PostCard";

export default {
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.three-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>