<template>
  <nav
    class="tab-bar fixed bottom-0 sm:hidden w-full z-50"
    :class="{ 'tab-bar--hidden': !showNavbar }"
  >
    <div class="relative">
      <div class="icons h-14">
        <g-link
          aria-label="Inicio"
          to="/"
          class="text-teal-400 transition-colors duration-300 ease-linear flex flex-col justify-center items-center px-2"
        >
          <home-icon
            class="transform transition duration-300 ease-linear h-7 w-7"
            :class="[$route.path === '/' ? 'icon' : 'icon--inactive']"
          />
        </g-link>
        <br />
        <g-link
          aria-label="Blog"
          to="/blog/"
          class="text-teal-400 transition-colors duration-300 ease-linear flex flex-col justify-center items-center px-2"
        >
          <book-icon
            class="transform transition duration-300 ease-linear h-7 w-7"
            :class="[$route.path === '/blog/' ? 'icon' : 'icon--inactive']"
          />
        </g-link>
      </div>
      <button
        class="circle"
        @click="showSearchModal"
        aria-label="button search"
      >
        <search-icon class="w-7 h-7" />
      </button>
      <wave-nav class="w-full" />
    </div>
  </nav>
</template>

<script>
import HomeIcon from "~/assets/icons/icon-home.svg";
import BookIcon from "~/assets/icons/icon-book.svg";
import UserIcon from "~/assets/icons/icon-user.svg";
import SearchIcon from "~/assets/icons/icon-search.svg";
import { navLinks } from "~/data/navLinks.js";
import WaveNav from "~/assets/svg/wave-nav.svg";

export default {
  components: {
    HomeIcon,
    BookIcon,
    UserIcon,
    SearchIcon,
    WaveNav,
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      navLinks: navLinks,
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
    classes() {
      return {
        iconActive: [
          "outline-none translate-y-0 transform transition-all duration-1000",
        ],
        iconInactive: [
          "outline-none translate-y-3 transform transition-all duration-1000",
        ],
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition < 0) {
        return;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }

      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
    showSearchModal() {
      this.$store.dispatch("showSearchModal");
    },
  },
};
</script>

<style lang="scss">
.tab-bar {
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
}

.tab-bar.tab-bar--hidden {
  box-shadow: none;
  transform: translate3d(0, 200%, 0);
}

.icons {
  grid-template-columns: 1fr 3rem 1fr;
  z-index: 1;

  @apply place-items-center	m-auto inset-y-0 inset-x-4 absolute grid;
}

.circle {
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1.5rem;
  bottom: 22px;

  @apply bg-teal-400 absolute z-10 rounded-full w-14 h-14 flex justify-center items-center;
}
</style>