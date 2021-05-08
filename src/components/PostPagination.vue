<template>
  <nav class="post-pagination">
    <r-button
      :to="previousPage.link"
      v-if="previousPage"
      outlined
      class="post-pagination__prev"
      aria-label="previous post"
    >
      <arrow-left-icon class="icon--left" />
      <span class="hidden sm:inline-block">
        {{ previousPage.title }}
      </span>
    </r-button>
    <r-button :to="nextPage.link" v-if="nextPage" class="post-pagination__next" aria-label="next post">
      {{ nextPage.title }}
      <arrow-right-icon class="icon--right" />
    </r-button>
  </nav>
</template>

<script>
import RButton from "~/components/atoms/Button";
import ArrowLeftIcon from "~/assets/icons/icon-arrow-left.svg";
import ArrowRightIcon from "~/assets/icons/icon-arrow-right.svg";

export default {
  name: "PostPagination",
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

<style lang="scss" scoped>
.post-pagination {
  @apply flex justify-between flex-wrap mt-4;

  &__next {
    @apply ml-auto;
  }

  &__prev {
    @apply mr-auto;
  }
}
</style>