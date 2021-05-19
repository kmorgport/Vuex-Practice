export default {
    increment(context){
        //commit can pass a mutation 
        setTimeout(()=>{
            context.commit('increment');
        }, 2000)
    },
    increase(context, payload){
        context.commit('increase', payload)
    },
}