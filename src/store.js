// Import a vue instance.
import Vue from "vue";

// Import vuex.
import Vuex from "vuex";


// Tell vue to use vuex.
Vue.use (Vuex);


// Export a new Store.
export default new Vuex.Store({
	state: {
		Deck: {
			Cards: []
		},
		HeaderTitle: "Deck Royale"
	},
	mutations: {

		/**
		 * Store a deck based on the received data.
		 * @param {Object} state the actual state
		 * @param {Object} Data the Deck to be saved
		 */
		SetDeck (state, Data) {

			state.Deck = Data;
		},

		SetHeader (state, Data) {

			state.HeaderTitle = Data;
		}
	},
	getters: {

		// Get the Deck.
		Deck: (state) => state.Deck,
		HeaderTitle: (state) => state.HeaderTitle
	}
});
