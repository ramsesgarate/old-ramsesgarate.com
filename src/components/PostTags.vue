<template>
  <div class="post-tags">
    <g-link class="post-tags__link" v-for="tag in tags" :key="tag.id" :to="tag.path">
      <span>#</span>{{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ['tags']
}
</script>

<style lang="scss">
</style>