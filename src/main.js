// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require("bulma/css/bulma.min.css");
import DefaultLayout from '~/layouts/Default.vue'
import RichContent from '~/components/RichContent.vue'
import RichContentRow from '~/components/RichContentRow.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faEnvelope, faArrowRight)


export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    Vue.component('rich-content', RichContent)
    Vue.component('rich-content-row', RichContentRow)
    Vue.component('font-awesome', FontAwesomeIcon)

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Prociono&display=swap'
    })
}