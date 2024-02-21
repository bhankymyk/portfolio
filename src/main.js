import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'


// Create the Vue app instance
const app = createApp(App);

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquare, faArrowRight ,faBriefcase, faEnvelope, faCheck, faHouse, faAddressCard, faListCheck, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTwitter, faLinkedin, faGithub, faWhatsappSquare, faHtml5, faCss3Alt, faReact, faBootstrap, faVuejs } from '@fortawesome/free-brands-svg-icons';


// Add the Font Awesome icons to the library
library.add(faLinkedin, faArrowRight ,faWhatsappSquare, faHtml5, faVuejs ,faGithub, faBriefcase,faCss3Alt, faReact,faBootstrap, faEnvelope, faCheck, faHouse, faAddressCard, faListCheck, faPenToSquare, faTwitter, faSquare);


// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

//Using Motion plugin
app.use(MotionPlugin)

// Use the router and mount the app
app.use(router).mount('#app');

