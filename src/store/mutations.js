export default {
    //ONLY MANIPULATE STATE FROM MUTATIONS
    setAuth(state, payload){
        state.isLoggedIn = payload.isAuth;
    }
};