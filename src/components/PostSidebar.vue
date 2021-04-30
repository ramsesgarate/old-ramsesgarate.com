<template>
  <div class="my-6">
    <div class="rounded bg-gray-900 p-4">
      <h2 class="text-2xl font-normal mb-2">Contenido</h2>
      <ul class="pl-6">
        <li
          v-for="(subtitle, index) in subtitles"
          :key="index"
          :class="'table-content__item-depth-' + subtitle.depth"
        >
          <span class="mr-2 text-teal-400">#</span>
          <a
            v-scroll-to="subtitle.anchor"
            class="hover:text-teal-400 transition-color duration-200 ease-in cursor-pointer"
          >
            {{ subtitle.value }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostSidebar",
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
  &__item-depth-2 {
    @apply text-sm mb-0 py-2;

    border-top: 1px dashed #0d2538;
    transition: border-color 0.3s;
  }

  &__item-depth-3 {
    @apply text-xs mb-0 py-1 pl-4 text-gray-400;
  }
}
</style>
