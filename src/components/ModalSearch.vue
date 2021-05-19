<template>
  <Transition name="fade">
    <div
      v-if="show"
      @click.self="closeModal"
      class="fixed top-0 left-0 z-50 flex w-screen h-screen flex-col p-4 sm:p-6"
      style="background-color: rgba(0, 0, 0, 0.4)"
    >
      <div
        class="my-0 mx-auto w-full max-w-screen-md flex flex-col min-h-0 bg-gray-900 relative rounded-2xl text-lg"
      >
        <header class="flex-none relative flex z-10 items-center mx-6 pt-6">
          <text-field
            label='Search (Press  "/" to focus)'
            v-model="search"
            prepend-icon="search"
            :is-focus="searchFocus"
            clearable
            @keydown.up.prevent="highlightPrev"
            @keydown.down.prevent="highlightNext"
            @keyup.enter="gotoLink"
            @keyup.esc="closeModal"
            @keyup="refreshSearchResults"
            @highlight-reset="softReset"
            ref="search"
          />
        </header>
        <div
          class="flex-auto overflow-auto rounded-b-2xl pt-0 px-6 pb-6 scroll-dark"
        >
          <div class="pb-4">
            <p
              class="text-lg text-gray-400 leading-6 mt-6"
              v-if="search.length === 0"
            >
              Sin busquedas recientes
            </p>
            <section v-if="results.length > 0">
              <div class="leading-6 font-bold text-gray-400 mt-6 mb-4">
                Publicaciones
              </div>
              <ul role="listbox" ref="results">
                <li
                  role="option"
                  aria-selected="false"
                  class="relative"
                  v-for="(page, index) of results"
                  :key="index"
                >
                  <a
                    :href="page.path"
                    @click="closeModal"
                    class="block rounded py-0 pr-5 pl-4 hover:bg-teal-400 transition-all duration-200 ease-in"
                    :class="{
                      'search-highlighted': index === highlightedIndex,
                    }"
                  >
                    <div class="flex items-center h-16">
                      <div class="flex-none mr-3.5">
                        <document-icon class="h-6 w-6 hover:text-gray-100" />
                      </div>
                      <div class="flex-auto flex flex-col-reverse min-w-0">
                        <span
                          class="leading-6 font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap"
                        >
                          {{ page.title }}
                        </span>
                      </div>
                      <div class="flex-none ml-3.5">
                        <enter-icon class="h-6 w-6 hover:text-gray-100" />
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </section>
            <p
              class="text-lg text-gray-400 leading-6 mt-6"
              v-if="search.length > 0 && results.length === 0"
            >
              No hay resultados para
              <span class="text-teal-400">{{ search }}</span>
            </p>
          </div>
        </div>
        <footer
          class="w-full items-center flex flex-row-reverse flex-shrink-0 justify-center relative select-none z-50 h-11 text-sm font-normal"
        >
          <ul class="text-gray-400 sm:flex m-0 p-0 hidden">
            <li class="mr-3 flex items-center">
              <span
                class="flex items-center key rounded-sm h-4 justify-center w-5 mr-2 p-1"
              >
                <key-enter-icon class="h-5 w-5"
              /></span>
              <span class="leading-6">para seleccionar</span>
            </li>
            <li class="mr-3 flex items-center">
              <span
                class="flex items-center key rounded-sm h-4 justify-center w-5 mr-2 p-1"
              >
                <key-down-icon class="h-5 w-5"
              /></span>
              <span
                class="flex items-center key rounded-sm h-4 justify-center w-5 mr-2 p-1"
              >
                <key-up-icon class="h-5 w-5"
              /></span>
              <span class="leading-6">para navegar</span>
            </li>
            <li class="mr-3 flex items-center">
              <span
                class="flex items-center key rounded-sm h-4 justify-center w-5 mr-2 p-1"
              >
                <key-esc-icon class="h-5 w-5"
              /></span>
              <span class="leading-6">para cerrar </span>
            </li>
          </ul>
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
import DocumentIcon from "~/assets/icons/icon-document.svg";
import EnterIcon from "~/assets/icons/icon-enter.svg";
import KeyEnterIcon from "~/assets/icons/icon-key-enter.svg";
import KeyEscIcon from "~/assets/icons/icon-key-esc.svg";
import KeyDownIcon from "~/assets/icons/icon-key-down.svg";
import KeyUpIcon from "~/assets/icons/icon-key-up.svg";
import TextField from "~/components/molecules/TextField";

export default {
  name: "ModalSearch",
  props: {
    show: {
      required: true,
      type: Boolean,
    },
  },
  components: {
    DocumentIcon,
    EnterIcon,
    TextField,
    KeyEnterIcon,
    KeyEscIcon,
    KeyDownIcon,
    KeyUpIcon,
  },
  data() {
    return {
      search: "",
      searchFocus: true,
      results: [],
      highlightedIndex: 0,
    };
  },
  computed: {
    post() {
      let result = [];
      const allPost = this.$static.allPost.edges.map((edge) => edge.node);
      allPost.forEach((page) => {
        result.push({
          path: page.path,
          title: page.title,
        });
      });
      return result;
    },
  },
  watch: {
    search() {
      this.refreshSearchResults();

      window.history.pushState(
        {},
        "Search",
        window.location.origin +
          window.location.pathname +
          "?q=" +
          encodeURIComponent(this.search)
      );
    },
    show(value) {
      if (value) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
  mounted() {
    this.search = new URL(location).searchParams.get("q") || "";
    if (this.search.length) {
      this.$store.dispatch("showSearchModal");
      this.refreshSearchResults();
    }
  },
  methods: {
    performSearch() {
      if (!this.search) return;

      this.results = this.post.filter((post) => {
        return post.title
          .toLowerCase()
          .includes(this.search.toLowerCase().trim());
      });
    },
    refreshSearchResults() {
      this.results = [];

      this.performSearch();
    },
    highlightPrev() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1;
        this.scrollIntoView();
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.results.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1;
        this.scrollIntoView();
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({
        block: "nearest",
      });
    },
    gotoLink() {
      if (this.results[this.highlightedIndex]) {
        this.closeModal();
        const { path } = this.results[this.highlightedIndex];
        this.$router.push({ path });
      }
    },
    softReset() {
      this.highlightedIndex = 0;
    },
    closeModal() {
      window.history.pushState(
        {},
        "Not Search",
        window.location.origin + window.location.pathname
      );
      this.search = "";
      this.hideSearchModal();
    },
    hideSearchModal() {
      this.$emit("hide-search-modal");
    },
  },
};
</script>

<style scoped>
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

.key {
  background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
  box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
    0 1px 2px 1px rgba(30, 35, 90, 0.4);
}

.search-highlighted {
  @apply bg-teal-400;
}
</style>
