import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";


Vue.use (Router);

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
		}
	]
});
