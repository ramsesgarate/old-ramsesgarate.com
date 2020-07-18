<template>
  <div class="post-tags">
    <g-link class="post-tags__link color-primary" v-for="tag in tags" :key="tag.id" :to="tag.path">
      <span>
        <svg focusable="false" data-prefix="fas" data-icon="tags" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-icon"><path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z" class=""></path></svg>
      </span>
      {{ tag.title }}
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