import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		Deck: {
			Cards: []
		}
	},
	mutations: {
		SetDeck (state, Data) {

			state.Deck = Data;
		}
	},
	getters: {
		Deck: (state) => state.Deck
	}
});
