import { createRouter, createWebHistory } from 'vue-router';
import PageCartt from '../PageCart/PageCartt.vue';
import Contentt from '../Contentt/Contentt.vue';
import DetailsProduct from '../ProductDetailts/DetailsProduct.vue';
import ShopPage from '../ShopPage/ShopPage.vue';
const routes = [
    { path: '/pagecart',component: PageCartt, name: 'pagecartt'},
    { path: '/',component: Contentt, name: 'contentt'},
    { path: '/shop',component: ShopPage, name: 'shoppage'},
    { path: '/details/:idProduct',component: DetailsProduct, name: 'details'},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router