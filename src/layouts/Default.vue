<template>
  <div id="app" class="">
    <the-header @open-search-modal="openSearchModal" />
    <LazyHydrate when-visible>
      <side-social-networks />
    </LazyHydrate>
    <main class="">
      <slot />
    </main>
    <LazyHydrate when-visible>
      <wave />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <side-email />
    </LazyHydrate>
    <Footer />
    <LazyHydrate when-visible>
      <the-mobile-bottom-nav />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <modal-search
        :show="isSearchModalOpen"
        @hide-search-modal="hideSearchModal"
      />
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
import TheHeader from "@/components/TheHeader";
import Footer from "@/components/Footer";
import SiteSEO from "@/mixins/SiteSEO";
import LazyHydrate from "vue-lazy-hydration";

export default {
  mixins: [SiteSEO],
  components: {
    LazyHydrate,
    TheHeader,
    Footer,
    TheMobileBottomNav: () => import("@/components/TheMobileBottomNav"),
    Wave: () => import("@/assets/svg/wave-footer.svg"),
    ModalSearch: () => import("@/components/ModalSearch"),
    SideSocialNetworks: () => import("@/components/SideSocialNetworks"),
    SideEmail: () => import("@/components/SideEmail"),
  },
  data() {
    return {
      isSearchModalOpen: false,
    };
  },
  mounted() {
    window.addEventListener("keyup", this.listenerKey);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.listenerKey);
  },
  methods: {
    listenerKey(evt) {
      if (evt.key === "/") {
        this.openSearchModal();
      }
    },
    openSearchModal() {
      this.isSearchModalOpen = true;
    },
    hideSearchModal() {
      this.isSearchModalOpen = false;
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
  background-color: #3ebd93;
  border-radius: 4px;
}
</style>