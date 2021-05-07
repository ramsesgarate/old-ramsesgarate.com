<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto"
  >
    <template v-for="project of projects">
      <r-card
        :key="project.id"
        :title="project.title"
        :sub-title="project.subtitle"
        class-actions="justify-center"
      >
        <template #card-text>
          {{ project.description }}
        </template>

        <template #card-actions>
          <r-button outlined :to="project.link">
            Revisar
            <link-icon class="h-5 w-5 icon--right" />
          </r-button>
        </template>
      </r-card>
    </template>
  </div>
</template>

<script>
import RCard from "@/components/atoms/Card";
import RButton from "@/components/atoms/Button";
import LinkIcon from "~/assets/icons/icon-link.svg";

export default {
  components: {
    RCard,
    RButton,
    LinkIcon,
  },
  props: {
    projects: {
      type: Array,
    },
  },
};
</script>
