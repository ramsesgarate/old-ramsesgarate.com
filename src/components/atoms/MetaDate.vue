<template>
  <div class="meta-date">
    <span class="mr-2" v-if="withLabel">Publicado el </span>
    <time>{{ date }}</time>
  </div>
</template>

<script>
export default {
  name: "MetaDate",
  props: {
    date: {
      type: String,
      required: true,
    },
    withLabel: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.meta-date {
  @apply flex text-gray-400;
}
</style>