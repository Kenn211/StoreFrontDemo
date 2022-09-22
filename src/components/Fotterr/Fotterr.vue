<script setup lang="ts">

</script>

<template>
    <div class="fotterr">
        <div class="container">
            <div class="row d-flex flex-column">
                <div class="col fotter">
                    <div class="fotter-item">
                        <h5>Recent Post</h5>
                        <hr/>
                        <ul class="footer-item-list">
                            <li class="fotter-item-list_item">
                                <a href="">Birds In Flight And The Power Of A Remote Working Team</a>
                            </li>
                            <li class="fotter-item-list_item">
                                <a href="">Make More Money through Ecommerce Analytics with Segment</a>
                            </li>
                            <li class="fotter-item-list_item">
                                <a href="">Lessons learnt planning a big product release</a>
                            </li>
                            <li class="fotter-item-list_item">
                                <a href="">So You Want to Be a Dropshipper: Picking the Perfect Product</a>
                            </li>
                            <li class="fotter-item-list_item">
                                <a href="">Create a custom Canvas homepage using SiteOrigin Page Builder</a>
                            </li>
                        </ul>
                    </div>

                    <div class="fotter-item-right">
                        <h5>Top Rated Products</h5>
                        <hr/>
                        <div class="footer-item-product py-3">
                            <div class="d-flex flex-column footer-item-product_content">
                                <a href="#">Happy Ninja</a>
                                <span>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </span>
                                <span>$18.00</span>
                            </div>
                            <div class="footer-item-product_img">
                                <img src="../../assets/T_7_front.webp" alt="">
                            </div>
                        </div>
                        <hr/>
                        <div class="footer-item-product py-3">
                            <div class="d-flex flex-column footer-item-product_content">
                                <a href="#">Woo Album #4</a>
                                <span>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </span>
                                <span>$18.00</span>
                            </div>
                            <div class="footer-item-product_img">
                                <img src="../../assets/cd_5_angle.webp" alt="">
                            </div>
                        </div>
                        <hr/>
                        <div class="footer-item-product py-3">
                            <div class="d-flex flex-column footer-item-product_content">
                                <a href="#">Ninja Silhouette</a>
                                <span>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </span>
                                <span>$18.00</span>
                            </div>
                            <div class="footer-item-product_img">
                                <img src="../../assets/T_5_front.webp" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col my-5 end-page">
                    <hr/>
                    <span>@ Storefront</span>
                    <br/>
                    <a href="https://www.facebook.com/vanh.kenn2k1">Build By Nguyễn Việt Anh</a>
                </div>
             
            </div>
        </div>
    </div>
</template>

<style scoped>
    .fotterr {
        margin-top: 6rem;
        background-color: #f0f0f0;
        color: #61656b;
        height: auto;
        width: 100%;
    }

    .fotter {
        display: grid;
        grid-template-columns: 47% 47%;
        gap: 6%;
        overflow: hidden;
    }

    @media only screen and (width<= 576px){
        .fotter {
        display: grid;
        grid-template-columns: 100%;
        gap: 0;
        margin-top: 5rem;
    }

    .fotter-item-right h5 {
        margin-top: 40px;
    }

    .fotter-item h5 {
        margin-top: 10px;
    }
    }

    .fotter-item-right h5,
    .fotter-item h5 {
        margin-top: 40px;
    }

    .fotter-item-list_item{
        padding: 10px 0;
    }

    .fotter-item-list_item a{
        color: black;
        font-size: 15px;
    }

    .fotter-item-list_item a:hover{
        text-decoration: underline;
    }

    .footer-item-product {
        display: grid;
        grid-template-columns: 30% 30%;
        gap: 40%
    }
    .footer-item-product_img img {
        width: 30%;
    }
    .footer-item-product_img{
        text-align: right;
    }

    .footer-item-product_content a {
        color: black;
    }

    .footer-item-product_content span:nth-child(2) {
        color: #663B9A;
    }

    .footer-item-product_content span:nth-child(3) {
        font-size: 14px;
    }

    .footer-item-product_content a:hover {
        text-decoration: underline;
    }

    .end-page a{
        color: black;
        line-height: 10px;
    }

    .end-page a:hover{
        text-decoration: underline;
    }
</style>