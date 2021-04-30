<template>
  <div class="bg-gray-900 text-center">
    <div class="container max-w-screen-lg mx-auto pt-16">
      <h1
        class="text-5xl font-medium tracking-normal leading-tight mb-4 text-teal-400"
        id="title"
      >
        {{ title }}
      </h1>
      <div class="post-info">
        <post-meta :date="date" :time-to-read="timeToRead" />
      </div>
    </div>
  </div>
</template>

<script>
import PostMeta from "./PostMeta";

export default {
  components: {
    PostMeta,
  },
  props: {
    title: {
      type: String,
    },
    date: {
      type: String,
    },
    timeToRead: {
      type: Number,
    },
    coverImage: {
      type: Object,
    },
  },
};
</script>