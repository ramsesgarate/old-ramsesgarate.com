<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto"
  >
    <template v-for="post in posts">
      <post-card :key="post.node.id" :post="post.node" />
    </template>
  </div>
</template>

<script>
import PostCard from "~/components/PostCard";

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