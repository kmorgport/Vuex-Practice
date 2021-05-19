export default {
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