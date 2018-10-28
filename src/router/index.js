import Vue from 'vue';
import VueRouter from 'vue-router';

import Store from '../components/Store'
import ShopingCart from '../components/ShoppingCart'
import Validation from '../components/Validation'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Store},
        {path: '/cart', component: ShopingCart},
        {path: '/validation', component: Validation},
        {path: '*', redirect: '/'},
    ]
});