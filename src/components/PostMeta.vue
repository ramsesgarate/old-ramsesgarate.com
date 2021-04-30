<template>
  <div class="flex justify-center text-gray-300 font-normal flex-wrap">
    <post-date :date="date" label class="text-gray-300" />
    <template v-if="timeToRead">
      <span class="text-teal-400 mx-2"> • </span>
      {{ timeToRead }} min de lectura
    </template>
  </div>
</template>

<script>
import PostDate from "./PostDate";

export default {
  components: {
    PostDate,
  },
  props: {
    date: {
      type: String,
    },
    timeToRead: {
      type: Number,
    },
  },
};
</script>