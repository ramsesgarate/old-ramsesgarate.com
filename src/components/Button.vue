<template>
  <div>
    <g-link
      v-if="to"
      :to="to"
      class="btn"
      :class="classes"
      type="button"
      v-on="$listeners"
    >
      <link-icon class="h-5 w-5 mr-1" v-if="withIconLink" />
      <span>
        <slot>Boton</slot>
      </span>
    </g-link>
    <button v-else class="btn" :class="classes" v-on="$listeners" type="button">
      <span class="">
        <slot>Boton</slot>
      </span>
    </button>
  </div>
</template>

<script>
import LinkIcon from "~/assets/icons/icon-link.svg";

export default {
  props: {
    outlined: {
      type: Boolean,
    },
    text: {
      type: Boolean,
    },
    to: {
      type: String,
    },
    withIconLink: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LinkIcon,
  },
  computed: {
    classes() {
      return {
        "btn--outlined": this.outlined,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  @apply rounded border-2 border-teal-400 bg-teal-400 duration-300 transition-colors ease-in px-3 py-2 flex items-center text-gray-800 hover:bg-teal-300 hover:border-teal-300;

  &--outlined {
    @apply bg-transparent hover:bg-teal-400 hover:bg-opacity-20 text-gray-100;
  }
}
</style>

