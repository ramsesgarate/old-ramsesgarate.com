<template>
  <div class="post-date">
    <span v-if="label">Publicado </span>
    <time>{{date}}</time>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    label: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.post-date {
  font-style: italic;
}
</style>