/*eslint-disable */


import Vue from "vue";


import App from "./App.vue";
import router from "./router";

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;


import VueFirestore from 'vue-firestore'


require('firebase/firestore')

Vue.use(VueFirestore, {
    key: 'id', // the name of the property. Default is '.key'.
    enumerable: true //  whether it is enumerable or not. Default is true.
})

Vue.use(VueFirestore)



/* import Vuex from 'vuex'

Vue.use(Vuex) */

import store from "./store";



import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    background: 'transparent'
});

window.Toast = Toast;
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})
import { VueMasonryPlugin } from 'vue-masonry';
Vue.use(VueMasonryPlugin)
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters)

import '../public/app.scss'
import '../public/custom.css'


import 'popper.js';
import 'bootstrap';
/* import 'bootstrap/dist/css/bootstrap.min.css' */


import 'bootstrap/dist/js/bootstrap.min.js'









import { fb } from './firebase';


/* import '@fortawesome/fontawesome-free'
 */
import VueParticles from 'vue-particles'
Vue.use(VueParticles)




Vue.component("nav-bar", require('./components/Navbar.vue').default);
Vue.component("heroe-sec", require('./components/Heroe.vue').default);
Vue.component("product-section", require('./components/sections/ProductSection.vue').default);
Vue.component("add-to-cart", require('./components/AddToCart.vue').default);
Vue.component("trolley", require('./components/Trolley.vue').default);


Vue.config.productionTip = false;
let app = '';

fb.auth().onAuthStateChanged(function(user) {
    if (!app) {
        // User is signed in.
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount("#app");
    }
});