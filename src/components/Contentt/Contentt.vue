<script setup lang="ts">
import Sliderr from './Sliderr.vue';
import ProductCategories from './ProductCategories.vue';
import FotterrContentt from './FotterrContentt.vue';
import HomePage from './HomePage.vue';
import { ref } from 'vue';
import {Products} from '../interfaces/interface'
import axios from 'axios'
import Header from '../Header/Header.vue';

const allProducts = ref<Products[]>([
    
]);

(async() => {
    try {
        const res =  await axios.get(`http://localhost:3000/products`);
        allProducts.value = res.data;
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
})()


//re-render Header Component
const componentKey = ref(0);
const forceRerender = () => {
    componentKey.value++
}

</script> 

<template>
    <Header :key="componentKey"></Header>
    <div class="content">
        <Sliderr></Sliderr>
        <ProductCategories></ProductCategories>
        <HomePage @rerender-header="forceRerender()" :listProduct="allProducts"></HomePage>
        <FotterrContentt></FotterrContentt>
    </div>
</template>

<style scoped>
    .content{
        width: 100%;
        height: auto;    
    }
</style>