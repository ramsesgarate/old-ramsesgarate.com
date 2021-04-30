<template>
  <g-link
    class="px-2 py-1 bg-teal-400 hover:bg-teal-500 flex rounded mr-2 text-gray-200 items-center transition-all duration-300 lowercase"
    :to="tag.path"
  >
    <span class="font-normal">
      {{ tag.title }}
    </span>
  </g-link>
</template>

<script>
import TagIcon from "~/assets/icons/icon-tag.svg";

export default {
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
  components: {
    TagIcon,
  },
};
</script>
