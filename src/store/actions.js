export default {
    //NEVER MANIPULATE STATE FROM ACTIONS 
    //use mutations 
    login(context){
        context.commit('setAuth', {isAuth: true})
    },
    logout(context){
        context.commit('setAuth', {isAuth: false})
    }
}