// Import main css
import '~/assets/style/main.scss'
// Import default layout so we don't need to import it to every page

import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { head }) {
  Vue.component('Layout', DefaultLayout);
}