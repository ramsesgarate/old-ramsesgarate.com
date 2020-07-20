<template>
  <div class="post-tags">
    <g-link class="post-tags__link color-primary" v-for="tag in tags" :key="tag.id" :to="tag.path">
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
@import '~/assets/style/base/variables.scss';

.post-tags__link {
  margin-right: 6px;
  padding: 6px;
  border-radius: 6px;
  font-size: .7rem;

  &:last-of-type {
    margin-right: 0;
  }
}

.post-tags__link .svg-icon {
  width: 18px;
  height: 18px;
  vertical-align: middle;
}

@include phablet-breakpoint {
    .post-tags__link {
        font-size: .8rem;
        padding: 8px;
    }
    .svg-icon {
        width: 16px;
        height: 16px;
    }
}

</style>