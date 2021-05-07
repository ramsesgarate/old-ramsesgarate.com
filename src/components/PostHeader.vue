<template>
  <div class="post-header">
    <div class="post-header__content">
      <h1 class="post-header__title" id="title">
        {{ title }}
      </h1>
      <post-meta :date="date" :time-to-read="timeToRead" />
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

<style lang="scss" scoped>
.post-header {
  @apply bg-gray-900;

  &__content {
    @apply container max-w-screen-lg mx-auto pt-16 text-center;
  }

  &__title {
    @apply text-5xl font-medium tracking-normal leading-tight mb-4 text-teal-400;
  }
}
</style>