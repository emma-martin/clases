import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cards: [
            {
                title: 'book',
                price: 31,
                qty: 1,
            },
            {
                title: 'wand',
                price: 240,
                qty: 1,
            },
            {
                title: 'hat',
                price: 280,
                qty: 1,
            },
        ],
    },
    mutations: {
        deleteItem(state, index) {
                state.cards.splice(index, 1)
        },
        addItem(state, index){
            state.cards[index].qty++;
        }
    },
    actions: {
        deleteItem({commit}, index){
            console.log(commit);
            commit('deleteItem', index);
        },
        addItem({commit}, index){
            commit('addItem', index);
        }

    },
    modules: {},
})

// ver mutatuon types action types