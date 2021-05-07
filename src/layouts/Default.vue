<template>
  <div id="app" class="">
    <LazyHydrate when-visible>
      <the-header />
    </LazyHydrate>
    <main class="">
      <slot />
    </main>
    <wave />
    <Footer />
    <LazyHydrate when-visible>
      <the-mobile-bottom-nav />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <modal-search :show="isSearchModalOpen" />
    </LazyHydrate>
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
import TheHeader from "~/components/TheHeader";
import Footer from "~/components/Footer";
import TheMobileBottomNav from "~/components/TheMobileBottomNav";
import { mapState } from "vuex";
import ModalSearch from "@/components/ModalSearch.vue";
import SiteSEO from "~/mixins/SiteSEO";
import LazyHydrate from "vue-lazy-hydration";

export default {
  mixins: [SiteSEO],
  components: {
    TheHeader,
    Footer,
    TheMobileBottomNav,
    Wave,
    ModalSearch,
    LazyHydrate,
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
</style>