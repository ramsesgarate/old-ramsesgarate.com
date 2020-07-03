// Import main css
import '~/assets/style/main.scss'
import 'vue-github-buttons/dist/vue-github-buttons.css';



// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import VueGitHubButtons from 'vue-github-buttons';


// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueGitHubButtons, { useCache: false });
}