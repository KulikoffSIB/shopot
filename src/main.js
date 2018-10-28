import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import store from "./store/index";
import router from "./router/index";

Vue.use(Vuelidate);

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app');
