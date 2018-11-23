import Vue from 'vue';
import VueRouter from 'vue-router';

import SimpleDisplay from "../components/simple-display";
import ListMaker from "../components/list-maker";
import Numbers from "../components/numbers";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: "/display", component: SimpleDisplay },
        { path: "/list", component: ListMaker },
        { path: "/numbers", component: Numbers },
        { path: "*", redirect: "/display" }
    ]
});