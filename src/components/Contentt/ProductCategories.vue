<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="row">
            <section class="products-section mt-5">
                <h2 class="products-section_title mt-5">Product Categories</h2>
                <ul class="products-category">
                    <li class="products-category_item">
                        <img src="../../assets/clothing.webp" alt="">
                        <br/>
                        <h5>Clothing (47)</h5>
                    </li>
                    <li class="products-category_item">
                        <img src="../../assets/electronics-category.webp" alt="">
                        <br/>
                        <h5>Kitchen (28)</h5>
                    </li>
                    <li class="products-category_item">
                        <img src="../../assets/kitchen-category.webp" alt="">
                        <br/>
                        <h5>Electronics (39)</h5>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<style scoped>

    .products-category {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        gap: 3%;
        overflow: hidden;
    }

    @media only screen and (max-width: 576px){
  .products-category{
    display: grid;
        grid-template-columns: 100%;
}
    }
    .products-section{
        cursor: pointer;
    }
    .products-section_title {
        text-align: center;
        margin-bottom: 40px;
        font-weight: 50;
    }

    .products-category_item img{
        border-radius: 5px;
        width: 100%;
    }

    .products-category_item h5 {
        margin-top: 20px;
        text-align: center;
        font-size: 15px;
    }
</style>