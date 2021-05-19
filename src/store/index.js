import { createStore } from 'vuex'

import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js'
import counterModule from './modules/index.js'


const store = createStore({
    modules: {
        numbers : counterModule
    },
    //states, mutations, and actions are local to the module that they are in. the S,M,A of store are global
    state(){
        return {
            counter: 0,
            isLoggedIn: false,
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;