import Layout from '~/layouts/Default.vue';
import VueScrollTo from 'vue-scrollto';
import VueLazyload from 'vue-lazyload';

export default function (Vue, { head }) {
  Vue.component('Layout', Layout);

  Vue.use(VueLazyload, {
    lazyComponent: true
  });

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

  head.bodyAttrs = { class: 'bg-gray-800 text-grey-050 font-sans font-medium scroll-dark' }
}