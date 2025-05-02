import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Home.vue";
import Portfolio from "../pages/Portfolio.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/', name: 'Home', component: Home, hash: '#top' },
    { path: '/', name: 'Home', component: Home, hash: '#luthier-services' },
    { path: '/', name: 'Home', component: Home, hash: '#gallery' },
    { path: '/', name: 'Home', component: Home, hash: '#contact' },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth', // optional: for smooth scrolling
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;