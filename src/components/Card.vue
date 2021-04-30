<template>
  <div class="rounded bg-gray-900 px-6 py-4">
    <div class="mb-5">
      <div class="font-bold text-xl" :class="{ 'mb-2': !subTitle }">
        {{ title }}
      </div>
      <div class="text-lg mb-2 text-gray-400" v-if="subTitle">
        {{ subTitle }}
      </div>
      <p class="text-gray-200 font-normal">
        {{ paragraph }}
      </p>
    </div>
    <div class="flex justify-center">
      <Button outlined with-icon-link :to="to"> Revisar </Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  components: {
    Button,
  },
  props: {
    outlined: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    paragraph: {
      type: String,
    },
    to: {
      type: String,
    },
  },
};
</script>