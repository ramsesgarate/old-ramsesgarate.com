<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto"
  >
    <template v-for="project in projects">
      <Card
        :key="project.id"
        :title="project.title"
        :sub-title="project.subtitle"
        :paragraph="project.description"
        class="blue-gradient"
        :to="project.link"
      />
    </template>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card,
  },
  props: {
    projects: {
      type: Array,
    },
  },
};
</script>
