<template>
  <a
    :href="editLink"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center hover:text-teal-400 transition-colors duration-300 ease-in"
  >
    <github-icon class="mr-2 h-6 w-6" />
    <span>Editar esta pagina en GitHub</span>
  </a>
</template>

<script>
import GithubIcon from "~/assets/svg/github.svg";

export default {
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

