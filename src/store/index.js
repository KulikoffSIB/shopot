import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const baseURL = 'http://localhost:3500';
const productsURL= `${baseURL}/products`;
const categoriesURL = `${baseURL}/categories`;
import CartModule from './cart';

export default new Vuex.Store({
    strict: true,
    modules: {
        cart: CartModule
    },
    state: {
        products: [],
        categoriesData: [],
        productsTotal: 0,
        currentPage: 1,
        pageSize: 4,
        currentCategory: 'All'
    },
    getters: {
        productsFilterredByCategory: state => {
            return state.products.filter(p => state.currentCategory === 'All' || p.category === state.currentCategory)
        },
        processedProducts: (state, getters) => {
            let index = (state.currentPage - 1) * state.pageSize;
            return getters.productsFilterredByCategory.slice(index, index + state.pageSize);
        },
        pageCount: (state, getters) => Math.ceil(getters.productsFilterredByCategory.length / state.pageSize),
        categories: state => ['All', ...new Set(state.products.map(p => p.category).sort())]
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        },
        setCurrentCategory(state, category) {
            state.currentCategory = category;
            state.currentPage = 1;
        },
        setData(state, data) {
            state.products = data.pdata;
            state.productsTotal = data.pdata.length;
            state.categoriesData = data.cdata.sort();
        },
        test(context, test) {
            console.log(test);
        }
    },
    actions: {
        async getData(context) {
            let pdata = (await axios.get(productsURL)).data;
            let cdata = (await axios.get(categoriesURL)).data;
            context.commit('setData', {pdata, cdata});

            return 'works';
        }
    }
})