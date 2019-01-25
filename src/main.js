import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HighchartsVue from "highcharts-vue";
import AXIOS from "axios";
import "./registerServiceWorker";



Vue.prototype.$api = Vue.$api = AXIOS.create ({
	baseURL: "http://www.clashapi.xyz/api"
});

Vue.use (HighchartsVue);
Vue.config.productionTip = false

new Vue ({
	router,
	store,
	render: h => h (App)
}).$mount ("#app");
