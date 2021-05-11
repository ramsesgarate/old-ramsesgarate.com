<template>
  <div class="table-content">
    <h2 class="table-content__title">Contenido</h2>
    <ul class="table-content__list">
      <li
        v-for="(subtitle, index) of subtitles"
        :key="index"
        :class="
          'table-content__item-depth table-content__item-depth--' +
          subtitle.depth
        "
      >
        <span class="mr-2 text-teal-400">#</span>
        <a v-scroll-to="subtitle.anchor" class="table-content__link">
          {{ subtitle.value }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostTableContent",
  props: {
    subtitles: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.table-content {
  @apply my-6 rounded bg-gray-900 p-4;

  &__title {
    @apply text-2xl font-normal mb-2 tracking-wide leading-8;
  }

  &__list {
    @apply pl-6;
  }

  &__item-depth {
    @apply text-base  mb-0 py-2 font-normal leading-5 tracking-wide;

    &--2 {
      border-top: 1px dashed #0d2538;
    }

    &--3 {
      @apply text-sm pl-4 text-gray-400;
    }
  }

  &__link {
    @apply hover:text-teal-400 transition-colors duration-200 ease-in cursor-pointer;
  }
}
</style>
