<template>
  <div id="app" class="">
    <the-header />
    <main class="">
      <slot />
    </main>
    <wave />
    <Footer />
    <the-mobile-bottom-nav />
    <modal-search :show="isSearchModalOpen" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteDescription
    keywords
    siteUrl
    siteName
    canonicalUrl
    image
    author {
      name
    }
    organization {
      name
      url
      logo
    }
    twitter {
      site
      creator
    }
  }
}
</static-query>

<script>
import Wave from "~/assets/svg/wave-footer.svg";
import TheHeader from "@/components/TheHeader";
import TheMobileBottomNav from "@/components/TheMobileBottomNav";
import Footer from "~/components/Footer";
import ModalSearch from "@/components/ModalSearch";
import { mapState } from "vuex";
import SiteSEO from "~/mixins/SiteSEO";

export default {
  mixins: [SiteSEO],
  components: {
    TheHeader,
    Footer,
    TheMobileBottomNav,
    Wave,
    ModalSearch,
  },
  computed: mapState({
    isSearchModalOpen: (state) => state.isSearchModalOpen,
  }),
  mounted() {
    window.addEventListener("keyup", this.listenerKey);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.listenerKey);
  },
  methods: {
    listenerKey(evt) {
      if (evt.key === "/") {
        this.$store.dispatch("showSearchModal");
      }
    },
  },
};
</script>


<style lang="scss">
.icon {
  @apply h-6 w-6;

  .primary {
    fill: #64d5ca;
  }

  .secondary {
    fill: #20504f;
  }

  &--right {
    @apply ml-1;
  }

  &--left {
    @apply mr-1;
  }
}

.icon--inactive {
  @apply h-6 w-6;

  .primary {
    fill: #a5b3bb;
  }

  .secondary {
    fill: #20504f;
  }
}

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 4px;
}

*::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 4px;
}

*:hover::-webkit-scrollbar-thumb {
  background-color: #3ebd93;
}
</style>