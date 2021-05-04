<template>
  <div class="input">
    <div
      @click.self="$emit('click-input', $event)"
      class="input-container flex justify-between"
      :class="classes"
    >
      <div class="pl-2 flex items-center">
        <slot name="left"></slot>
      </div>
      <div class="input-control flex-1" :class="{ 'ml-1': hasLeftSlot }">
        <label class="label" :for="computedId" v-html="label"></label>
        <div class="input-slot">
          <!-- <span>Uno dos tres</span> -->
          <slot name="input"></slot>
        </div>
      </div>
      <div class="pr-2 flex items-center">
        <slot name="right"> </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    uidString: {
      type: String,
      default: "one",
    },
    hasValue: Boolean,
    isFocused: Boolean,
    hasDisabled: Boolean,
    label: {
      type: [String, Number, undefined, null],
    },
    computedId: { type: String, default: undefined },
  },
  computed: {
    classes() {
      return {
        "input-container_value": this.hasValue,
        "input-container_disabled": this.hasDisabled,
        "input-container_focus": this.isFocused,
        "input-container_success": this.hasSuccess,
        "input-container_error": this.hasError,
      };
    },
    hasLeftSlot() {
      return !!this.$slots.left;
    },
    hasRightSlot() {
      return !!this.$slots.right;
    },
  },
};
</script>
<style lang="scss" scoped>
.input {
  @apply w-full;

  .input-container {
    @apply bg-gray-800 rounded-md cursor-text relative mb-1;

    .input-control {
      @apply relative my-4;

      .label {
        @apply absolute text-gray-500 text-base transition-all ease-linear duration-200 top-0;
        @apply overflow-hidden w-full overflow-ellipsis pointer-events-none	whitespace-nowrap z-10;
      }

      .input-slot {
        @apply relative transition-all ease-linear duration-200 bottom-0;

        input {
          @apply text-sm text-gray-100 bg-gray-800;
        }
      }
    }

    &_value {
      .input-control {
        .label {
          top: -8px;
          font-size: 12px;

          @apply text-teal-400;
        }

        .input-slot {
          bottom: -9px;
        }
      }
    }

    &_disabled {
      @apply bg-gray-800 cursor-not-allowed #{!important};
    }

    &_focus {
      .input-control {
        .label {
          top: -8px;
          font-size: 12px;

          @apply text-teal-400;
        }

        .input-slot {
          bottom: -9px;
        }
      }
    }
  }
}
</style>
