<template>
  <div class="side-right">
    <div class="side-right__email">
      <a href="mailto:rsgarate@gmail.com"> rsgarate@gmail.com </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideEmail",
};
</script>

<style lang="scss" scoped>
.side-right {
  @apply hidden md:block fixed w-10 z-10  text-gray-300 bottom-0 right-8 lg:right-10 left-auto;

  &__email {
    @apply flex items-center justify-center relative flex-col;

    &::after {
      @apply block h-24 mx-auto my-0 bg-gray-300;

      content: "";
      width: 1px;
    }
  }

  a {
    @apply my-5 mx-auto p-3 leading-5 text-xs tracking-widest transform transition-all ease-in duration-300;

    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;

    &:hover {
      @apply text-teal-400 -translate-y-1;
    }
  }
}
</style>