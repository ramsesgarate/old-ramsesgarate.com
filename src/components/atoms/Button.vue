<template>
  <div>
    <g-link
      v-if="to"
      :to="to"
      class="button"
      :class="classes"
      v-on="$listeners"
      v-bind="$attrs"
    >
      <span class="button__content">
        <slot></slot>
      </span>
    </g-link>
    <button
      v-else
      class="button"
      :class="classes"
      v-on="$listeners"
      v-bind="$attrs"
      type="button"
    >
      <span class="button__content">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "r-a-button",
  inheritAttrs: false,
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
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        "button--outlined": this.outlined,
        "button--small": this.small,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  min-width: 64px;

  @apply rounded border-2  duration-300 transition-colors ease-in px-4 py-0 inline-flex justify-center items-center no-underline;
  @apply border-teal-400 bg-teal-400  hover:bg-teal-300 hover:border-teal-300 text-gray-800 text-base h-9;

  &--outlined {
    @apply bg-transparent hover:bg-teal-400 hover:bg-opacity-20 text-gray-100;
  }

  &--small {
    min-width: 50px;

    @apply h-7 px-3 text-sm;
  }

  &__content {
    @apply flex items-center;
  }
}
</style>

