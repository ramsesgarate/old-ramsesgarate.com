<template>
  <button class="button-search" v-on="$listeners">
    <div class="button-search__prepend">
      <search-icon class="button-search__icon" />
    </div>
    <span class="button-search__label">
      Buscar (Presione "/" para enfocar)
    </span>
  </button>
</template>
<script>
import SearchIcon from "~/assets/icons/icon-search.svg";

export default {
  name: "ButtonSearch",
  inheritAttrs: false,
  components: {
    SearchIcon,
  },
};
</script>

<style lang="scss" scoped>
.button-search {
  @apply w-full flex items-stretch text-base mb-2 px-3 bg-gray-800 rounded focus:outline-none;

  &__prepend {
    @apply inline-flex mt-4 self-start mr-auto pr-1;
  }

  &__icon {
    @apply inline-flex items-center justify-center h-6 w-6;
  }

  &__label {
    @apply text-base text-gray-400 my-4 w-full overflow-ellipsis whitespace-nowrap font-semibold;
  }
}
</style>