import moduleMutations from './mutations.js'
import moduleActions from './actions.js'
import moduleGetters from './getters.js'

export default {
    //state inside of a module is treated as local to this module
    namespaced: true,
    state() {
        return { 
            counter: 0,
        } 
    },
    mutations: moduleMutations,
    actions: moduleActions,
    getters: moduleGetters
}