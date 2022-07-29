export default{
    setUser(state, payload) {
        console.log(payload);
        state.token = payload.token;
        state.userId = payload.userId;
        state.didAutoLogout = false;
        //state.tokenExpiration = payload.tokenExpiration;
    }, 
    setAutoLogout(state) {
        state.didAutoLogout = true;
    }
};