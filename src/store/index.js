import Vuex from 'vuex';
import Vue from 'vue';
import cart from './module/cart'
import products from './module/products'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        products
    },

    state: {
        //data
    },

    getters: {
        //computed
    },

    actions: {
        //methods
    },

    mutations: {
        //updating the state
    }
})