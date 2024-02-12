import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faEnvelope, faCheck, faHouse, faAddressCard, faListCheck, faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add the Font Awesome icons to the library
library.add(faBriefcase, faEnvelope, faCheck, faHouse, faAddressCard, faListCheck, faTrash, faPenToSquare);

// Create the Vue app instance
const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router and mount the app
app.use(router).mount('#app');
