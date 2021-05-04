<template>
  <nav class="flex justify-between flex-wrap mt-4">
    <r-button exact :to="previousPage.link" v-if="previousPage" outlined class="mr-auto">
      <arrow-left-icon class="w-6 h-6 inline-block" />
      <span class="hidden sm:inline">
        {{ previousPage.title }}
      </span>
    </r-button>
    <r-button exact :to="nextPage.link" v-if="nextPage" class="ml-auto">
      {{ nextPage.title }}
      <arrow-right-icon class="w-6 h-6 inline-block" />
    </r-button>
  </nav>
</template>

<script>
import RButton from "~/components/atoms/Button";
import ArrowLeftIcon from "~/assets/icons/icon-arrow-left.svg";
import ArrowRightIcon from "~/assets/icons/icon-arrow-right.svg";

export default {
  props: {
    previousPage: {
      type: Object,
    },
    nextPage: {
      type: Object,
    },
  },
  components: {
    RButton,
    ArrowLeftIcon,
    ArrowRightIcon,
  },
};
</script>
