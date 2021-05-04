<template>
  <header class="bg-gray-900">
    <div
      class="container mx-auto max-w-screen-lg items-center flex justify-between py-2 h-16 sm:h-20"
    >
      <g-link to="/">
        <g-image
          src="~/assets/svg/logo-120.svg"
          :immediate="true"
          class="h-14 w-14"
          alt="Logo RG"
          width="48"
          height="48"
        ></g-image>
      </g-link>
      <nav class="hidden sm:flex items-center">
        <ul class="flex text-center justify-between">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="px-2 py-2 hover:text-teal-400"
            :class="{
              'text-teal-400': $route.path === link.path,
            }"
          >
            <g-link
              :to="link.path"
              class="font-medium uppercase transition-colors duration-300 ease-linear flex items-center"
            >
              <span
                class="opacity-0 transition-opacity duration-300 ease-in mr-1"
                :class="{ 'opacity-100': $route.path === link.path }"
              >
                &lt;
              </span>
              <span>
                {{ link.name }}
              </span>
              <span
                class="opacity-0 ml-1 flex"
                :class="{ 'opacity-100': $route.path === link.path }"
              >
                <span> &#47; </span>
                <span> &gt; </span>
              </span>
            </g-link>
          </li>
        </ul>
        <search-focus
          label='Buscar (Presione  "/" para enfocar)'
          prepend-icon="search"
          @click="showSearchModal"
        />
      </nav>
      <!--       <div>
        <text-field
          label='Search (Press  "/" to focus)'
          v-model="search"
          prepend-icon="search"
          clearable
          ref="search"
          @open="isModalSearchOpen = true"
        >
        </text-field>
        <modal-search
          :show="isModalSearchOpen"
          @close="isModalSearchOpen = false"
        />
      </div> -->
    </div>
  </header>
</template>

<script>
import TextField from "~/components/organism/TextField";
import UserIcon from "~/assets/icons/icon-user.svg";
import SearchFocus from "~/components/organism/SearchFocus";

import { navLinks } from "~/data/navLinks";
import ModalSearch from "../ModalSearch.vue";

export default {
  components: {
    TextField,
    SearchFocus,
    UserIcon,
    ModalSearch,
  },
  data() {
    return {
      search: "",
      isModalSearchOpen: false,
    };
  },
  computed: {
    links() {
      return navLinks;
    },
  },
  methods: {
    showSearchModal() {
      this.$store.dispatch("showSearchModal");
    },
  },
};
</script>

