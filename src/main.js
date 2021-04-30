// Import main css

// Import default layout so we don't need to import it to every page
/* import '~/assets/style/main.scss'; */

import Layout from '~/layouts/Default.vue';
import VueScrollTo from 'vue-scrollto';
import VueFuse from 'vue-fuse';
import Vuex from 'vuex';
import eager from '~/directives/eager.js';


// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { head, appOptions}) {
  Vue.component('Layout', Layout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

  Vue.use(VueFuse);
  Vue.directive("eager", eager);

  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      isSearchModalOpen: false,
    },
    mutations: {
      showSearchModal(state) {
        state.isSearchModalOpen = true;
      },
      hideSearchModal(state) {
        state.isSearchModalOpen = false;
      }
    },
    actions: {
      showSearchModal: ({ commit }) => commit('showSearchModal'),
      hideSearchModal: ({ commit }) => commit('hideSearchModal'),
    }
  })

  head.bodyAttrs = { class: 'bg-gray-800 text-grey-050 font-sans font-medium' }

}