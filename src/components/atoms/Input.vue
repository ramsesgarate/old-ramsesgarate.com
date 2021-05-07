<template>
  <div class="input">
    <div
      @click.self="$emit('click-input', $event)"
      class="input__container"
      :class="classes"
    >
      <div class="input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="text-field__slot">
        <label class="label" :for="computedId" v-html="label"></label>
        <slot name="input"></slot>
      </div>
      <div class="input__append">
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RInput",
  props: {
    hasValue: Boolean,
    isFocused: Boolean,
    label: {
      type: [String, Number, undefined, null],
    },
    computedId: { type: String, default: undefined },
  },
  computed: {
    classes() {
      return {
        "input__container--label-active": this.hasValue,
        "input__container--focus": this.isFocused,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  @apply w-full h-auto min-w-0;

  &__prepend,
  &__append {
    @apply inline-flex mt-4 self-start;
  }

  &__prepend {
    @apply mr-auto pr-1;
  }

  &__append {
    @apply ml-auto pl-1;
  }

  &__icon {
    @apply inline-flex items-center justify-center h-6 w-6;
  }

  &__container {
    @apply w-full flex items-stretch text-base mb-2 px-3 bg-gray-800 rounded;

    .text-field {
      &__slot {
        @apply flex relative flex-auto;

        input {
          @apply flex-auto py-2 leading-5 w-full max-w-full min-w-0 text-gray-100 bg-gray-800 mt-5 outline-none;
        }

        .label {
          transform-origin: top left;
          max-width: 90%;
          top: 18px;
          transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);

          @apply text-base pointer-events-none whitespace-nowrap overflow-ellipsis overflow-hidden leading-5 h-5 absolute right-auto left-0 text-gray-500;
        }
      }
    }

    &--focus,
    &--label-active {
      .text-field {
        &__slot {
          .label {
            transform: translateY(-6px) scale(0.8);

            @apply text-teal-400;
          }
        }
      }
    }
  }
}
</style>
