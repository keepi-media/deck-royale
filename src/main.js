// Import libraries.
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
import AXIOS from "axios";

// Import the main component.
import App from "./App.vue";

// Import the router and the store.
import router from "./router";
import store from "./store";


// Configure the Vue instance to use AXIOS.
Vue.prototype.$api = Vue.$api = AXIOS.create ({
	baseURL: "http://www.clashapi.xyz/api"
});

// Configure the Vue instance to use HighCharts.
Vue.use (HighchartsVue);

// Configure the Vue instance to don't show the production tip.
Vue.config.productionTip = false


// Create a Vue instance based on the configured settings.
new Vue ({
	router,
	store,
	render: h => h (App)
}).$mount ("#app");
