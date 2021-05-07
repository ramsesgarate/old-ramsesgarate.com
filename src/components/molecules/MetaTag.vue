<template>
  <r-button small :to="tag.path" class="tag">
    {{ tag.title }}
  </r-button>
</template>

<script>
import RButton from "@/components/atoms/Button";

export default {
  name: "MetaTag",
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
  components: {
    RButton,
  },
};
</script>

<style lang="scss" scoped>
.tag {
  @apply lowercase mr-2;

  &:last-of-type {
    @apply mr-0;
  }
}
</style>


