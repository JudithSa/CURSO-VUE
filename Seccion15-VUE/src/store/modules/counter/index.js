import couterMutations from './mutations.js';
import couterActions from './actions.js';
import couterGetters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            counter: 0,
        };
    },
        mutations: couterMutations, 
        actions: couterActions,
        getters: couterGetters,
    };
