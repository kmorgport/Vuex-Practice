import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

const counterModule = {
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

const store = createStore({
    modules: {
        numbers : counterModule
    },
    state(){
        return {
            counter: 0,
            isLoggedIn: false,
        };
    },
    mutations:{
        //ONLY MANIPULATE STATE FROM MUTATIONS
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        //NEVER MANIPULATE STATE FROM ACTIONS 
        //use mutations 
        login(context){
            context.commit('setAuth', {isAuth: true})
        },
        logout(context){
            context.commit('setAuth', {isAuth: false})
        }
    },
    getters: {
        userIsAuthenticated(state){
            return state.isLoggedIn
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
