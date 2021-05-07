<template>
  <a :href="editLink" target="_blank" rel="noopener noreferrer">
    <github-icon class="icon--left" />
    <span>Editar esta pagina en GitHub</span>
  </a>
</template>

<script>
import GithubIcon from "~/assets/svg/github.svg";

export default {
  name: "LinkEditPost",
  props: {
    editLink: {
      type: String,
      required: true,
    },
  },
  components: {
    GithubIcon,
  },
};
</script>

<style scoped>
a {
  @apply flex items-center hover:text-teal-400 transition-colors duration-300 ease-in mb-4 sm:mb-0;
}
</style>

