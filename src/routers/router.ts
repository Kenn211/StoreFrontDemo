import { createRouter, createWebHistory } from 'vue-router';
import PageCartt from '../views/PageCartt.vue';
import Home from '../views/Home.vue';
import DetailsProduct from '../views/DetailsProduct.vue';
import ShopPage from '../views/ShopPage.vue';
const routes = [
    { path: '/pagecart',component: PageCartt, name: 'pagecartt'},
    { path: '/',component: Home, name: 'contentt'},
    { path: '/shop',component: ShopPage, name: 'shoppage'},
    { path: '/details/:idProduct',component: DetailsProduct, name: 'details'},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router