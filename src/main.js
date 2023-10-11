import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faEnvelope, faPhoneSquareAlt, faTicketAlt, faCalendarAlt, faGlobe, faPoundSign } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import { Modal } from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'


library.add(
    faUserSecret,
    faEnvelope,
    faPhoneSquareAlt,
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faTicketAlt,
    faCalendarAlt,
    faGlobe,
    faPoundSign,
);

const toastoptions = {
    // You can set your default options here
};

const app = createApp(App);
app.use(router);
app.use(Toast, toastoptions);
app.use(VCalendar, {});
app.component('VuModal', Modal);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
