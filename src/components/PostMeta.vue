<template>
  <div class="post-meta">
    <meta-date :date="date" with-label />
    <template v-if="timeToRead">
      <span class="dot"> • </span>
      {{ timeToRead }} min de lectura
    </template>
  </div>
</template>

<script>
import MetaDate from "@/components/atoms/MetaDate";

export default {
  components: {
    MetaDate,
  },
  props: {
    date: {
      type: String,
    },
    timeToRead: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.post-meta {
  @apply flex justify-center text-gray-400 font-normal flex-wrap;
}

.dot {
  @apply text-teal-400 mx-2;
}
</style>