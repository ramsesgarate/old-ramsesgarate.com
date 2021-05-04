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
      <r-button outlined :to="to">
        Revisar
        <link-icon class="h-5 w-5 icon--right" />
      </r-button>
    </div>
  </div>
</template>

<script>
import RButton from "@/components/atoms/Button";
import LinkIcon from "~/assets/icons/icon-link.svg";

export default {
  components: {
    RButton,
    LinkIcon,
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

<style>
.icon--right {
  @apply ml-2;
}
</style>