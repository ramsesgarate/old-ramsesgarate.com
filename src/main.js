// Import main css

// Import default layout so we don't need to import it to every page
import '~/assets/style/main.scss';

import VueLazyload from 'vue-lazyload'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue) {
  Vue.use(VueLazyload, {
    lazyComponent: true
  });
}