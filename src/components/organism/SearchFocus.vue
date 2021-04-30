<template>
  <button
    class="w-full bg-gray-800 rounded-md focus:outline-none relative mb-1 flex justify-between items-center ml-4"
    v-on="$listeners"
  >
    <div class="pl-2 flex items-center">
      <search-icon class="h-7 w-7" />
    </div>
    <span class="text-gray-500 my-4 pr-2 w-full overflow-ellipsis font-semibold pointer-events-none	whitespace-nowrap ml-1">
      {{ label }}
    </span>
  </button>
</template>
<script>
import GInput from "./Input";
import SearchIcon from "~/assets/icons/icon-search.svg";

export default {
  name: "SearchFocus",
  inheritAttrs: false,
  components: {
    GInput,
    SearchIcon,
  },
  props: {
    label: [String, Number, undefined, null],
    isFocus: {
      type: Boolean,
      default: false,
    },
    prependIcon: {
      type: String,
      default: "",
    },
  },
};
</script>
