<template>
  <section
    :class="className"
    class="mb-16 container mx-auto max-w-screen-lg md:px-20 lg:px-10"
  >
    <h2 class="text-3xl mb-10 flex justify-between items-center">
      <slot name="title">{{ this.title }}</slot>
    </h2>
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
    },
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
};
</script>