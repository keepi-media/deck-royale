const Info = () => System.import('./components/card-info/CardInfo.vue');
const Cards = () => System.import('./components/cards/Cards.vue');
const Arenas = () => System.import('./components/arenas/Arenas.vue');
import Home from './components/home/Home.vue';
// import Arenas from './components/arenas/Arenas.vue';
// import Cards from './components/cards/Cards.vue';
// import Info from './components/card-info/CardInfo.vue';

import Graphcs from './components/graphcs/Graphcs.vue'

export const routes = [
    { path: '', name: 'home', component: Home, title: 'Home', menu: true},
    { path: '/arenas', name: 'arenas', component: Arenas, title: 'Arenas', menu: true},
    { path: '/cards', name: 'cards', component: Cards, title: 'Cards', menu: true},
    { path: '/card-info/:id', name: 'cardInfo', component: Info, title: 'Card Info', menu: false},
    { path: '/cards/card-info/:id', name: 'cardsInfo', component: Info, title: 'Cards Info', menu: false},
    { path: '*', component: Home, menu: false},
    { path: '/graphcs', name: 'graphcs', component: Graphcs, title: 'Graphcs', menu: true}
];
