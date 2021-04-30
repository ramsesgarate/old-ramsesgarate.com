<template>
  <div class="flex text-gray-200 mb-2">
    <span v-if="label" class="mr-2">Publicado el </span>
    <time>{{ date }}</time>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
    label: {
      type: Boolean,
      default: false,
    },
  },
};
</script>