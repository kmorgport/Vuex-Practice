import { createStore } from 'vuex'

const counterModule = {
    //state inside of a module is treated as local to this module
    namespaced: true,
    state() {
        return { 
            counter: 0,
        } 
    },
    mutations: {
        inrement(state){
            state.counter = state.counter + 2;
        },
        increase(state, payload){
            state.counter = state.counter + payload.value
        },
    },
    actions: {
        increment(context){
            //commit can pass a mutation 
            setTimeout(()=>{
                context.commit('increment');
            }, 2000)
        },
        increase(context, payload){
            context.commit('increase', payload)
        },
    },
    getters: {
        finalCounter(state){
            //also have access to rootState and rootGetters
            //allow access to all getters in the $Store 
            return state.counter * 3;
        },
        normalizedCounter(_, getters){
            const finalCounter = getters.finalCounter
            if(finalCounter < 0){
                return 0;
            }
            if(finalCounter > 100){
                return 100;
            }
            return finalCounter
        },
    }
}

