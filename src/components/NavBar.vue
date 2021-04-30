<template>
  <nav>
    <div class="container mx-auto items-center flex justify-between py-2">
      <g-link to="/">
        <g-image
          src="~/assets/images/logo-rg.png"
          class="h-14 w-14"
          alt="Logo RG"
        ></g-image>
      </g-link>
      <div class="hidden sm:flex">
        <g-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.path"
          class="border-b-2 border-transparent hover:border-green-500 transition duration-200 p-2 ml-4"
        >
          {{ link.name }}
        </g-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { navLinks } from "~/data/navLinks";

export default {
  computed: {
    links() {
      return navLinks;
    },
  },
};
</script>

