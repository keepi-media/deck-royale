// Import a vue instance.
import Vue from "vue";

// Import the vue router.
import Router from "vue-router";

// Import the Home view.
import Home from "./views/Home.vue";


// Tell vue to use the Router.
Vue.use (Router);


// Export a new Router.
export default new Router ({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home
		},
		{
			path: "/deck",
			name: "Deck",
			component: () => import ("./views/Deck.vue")
		},
		{
			path: "/card/:id",
			name: "Card",
			component: () => import ("./views/Card.vue")
		},
		{
			path: "/arenas",
			name: "Arenas",
			component: () => import ("./views/Arenas.vue")
		},
		{
			path: "/cards",
			name: "Cards",
			component: () => import ("./views/Cards.vue")
		},
		{
			path: "/statistics",
			name: "Statistics",
			component: () => import ("./views/Statistics.vue")
		}
	]
});
