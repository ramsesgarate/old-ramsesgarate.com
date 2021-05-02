<template>
  <nav class="flex justify-between flex-wrap mt-4">
    <Button exact :to="previousPage.link" v-if="previousPage" outlined class="mr-auto">
      <arrow-left-icon class="w-6 h-6 inline-block" />
      <span class="hidden sm:inline">
        {{ previousPage.title }}
      </span>
    </Button>
    <Button exact :to="nextPage.link" v-if="nextPage" class="ml-auto">
      {{ nextPage.title }}
      <arrow-right-icon class="w-6 h-6 inline-block" />
    </Button>
  </nav>
</template>

<script>
import Button from "~/components/Button";
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
    Button,
    ArrowLeftIcon,
    ArrowRightIcon,
  },
};
</script>
