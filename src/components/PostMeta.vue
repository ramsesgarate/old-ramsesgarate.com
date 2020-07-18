<template>
  <div class="post-meta">
    <post-date :date="date" label/>
    <template v-if="timeToRead">
      <span class="dot"> • </span>
      <strong>{{ timeToRead }} min de lectura</strong>
    </template>
  </div>
</template>

<script>
import PostDate from './PostDate'

export default {
  components: {
    PostDate
  },
  props: {
    date: {
      type: String
    },
    timeToRead: {
      type: Number
    }
  }
}
</script>

<style lang="scss">
</style>