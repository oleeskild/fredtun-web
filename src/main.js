// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require("bulma/css/bulma.min.css");
import DefaultLayout from '~/layouts/Default.vue'
import RichContent from '~/components/RichContent.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('rich-content', RichContent)
}
