import Layout from '~/layouts/Default.vue';
import VueScrollTo from 'vue-scrollto';
import Vuex from 'vuex';

export default function (Vue, { head, appOptions }) {
  Vue.component('Layout', Layout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

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