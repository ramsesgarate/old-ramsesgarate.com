<template>
  <div class="post-date">
    <time>{{date}}</time>
  </div>
</template>

<script>
export default {
  props: ['date']
}
</script>

<style lang="scss">
.post-date {
  flex: 1;
}
</style>