<template>
  <div class="post-tags">
    <g-link class="post-tags__link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
      <span>#</span>{{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-tags>a {
font-weight: 500;
    background: #f1f3f5;
    color: #343a40;
    margin: .2rem;
    padding: .3rem .4rem;
    font-size: .8rem;
    border-radius: .3rem;
    border-bottom: 0;
    white-space: nowrap;
}
</style>