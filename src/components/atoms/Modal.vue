<template>
  <Transition name="fade">
    <div
      v-if="true"
      @click.self="onClickOutside"
      class="modal"
      style="background-color: rgba(0, 0, 0, 0.4)"
    >
      <div class="modal__content">
        <header class="modal__header">
          <slot name="modal-header"> </slot>
        </header>
        <div class="modal__body">
          <slot name="modal-body"></slot>
        </div>
        <footer class="modal__footer">
          <slot name="moda-footer"> </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<static-query>
query Search {
  allPost {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "ModalSearch",
  props: {
    value: {
      required: true,
      type: Boolean,
    },
  },
  watch: {
    value(value) {
      if (value) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },

  methods: {
    onClickOutside() {
      this.$emit("click:outside");
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.scroll-dark::-webkit-scrollbar {
  width: 4px;
}

.scroll-dark::-webkit-scrollbar-track {
  background-color: #9fb3c8;
  border-radius: 4px;
}

.scroll-dark::-webkit-scrollbar-thumb {
  background-color: #3ebd93;
  border-radius: 4px;
}

.modal {
  @apply fixed top-0 left-0 z-50 flex w-screen h-screen flex-col p-4 sm:p-6;

  &__content {
    @apply my-0 mx-auto w-full max-w-screen-md flex flex-col min-h-0 bg-gray-900 relative rounded-2xl text-lg;
  }

  &__header {
    @apply flex-none relative flex z-10 items-center mx-6 pt-6;
  }

  &__body {
    @apply flex-auto overflow-auto rounded-b-2xl pt-0 px-6 pb-6 scroll-dark;
  }

  &__footer {
    @apply w-full items-center flex flex-row-reverse flex-shrink-0 justify-center relative select-none z-50 h-11 text-sm font-normal;
  }
}
</style>
