import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        items: []
    },
    mutations: {
        ADD_ITEMS(state, items) {
            state.items = items;
        },
        REMOVE_ITEMS(state, item) {
            state.items = state.items.filter((i) => { return i.key !== item.key });
        }
    },
    actions: {
        addItems({ commit }, items) {
            commit('ADD_ITEMS', items)
        },
        removeItem({ commit }, item) {
            commit('REMOVE_ITEMS', item)
        }
        // also possible
        // addTodo = function(store){
        // var commit = store.commit
        // commit('ADD_TODO')
        // }
    },
    getters: {
        items: state => state.items,
    }
})