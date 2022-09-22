<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="row px-5 mx-5 d-flex flex-column">
            <section class="col-9 products-recent_category mt-5">
                <h3 class="products-recent_title">You may also Like</h3>
                <div class="products-recent">
                    <div class="banner__product">
                            <div class="banner__image">
                                <img class="image1" src="../../assets/cd_5_angle.webp" width="100%" alt="">
                                <img class="image2" src="../../assets/cd_5_flat.webp" width="100%" alt="">
                            </div>
                        <div class="banner__title">
                            <span>Woo Album #4</span><br/>
                            <span>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span><br/>
                            <span>$9.00</span><br/>
                            <button class="mt-2">Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<style scoped>
.products-recent_title {
    margin-bottom: 40px;
}
.products-recent{
    display: grid;
    grid-template-columns: 32.6% 32.6% 32.6%;
    grid-gap:2%;
}
.banner__product{
    cursor: pointer;
    text-align: center;
}
.banner__image{
    position: relative;

}
.banner__image img{
    border-radius: 5px;
}
.banner__title{
    font-size: 15px;
    display: block;
    margin-top: 10px;
}
.banner__title span:nth-child(5){
    font-size: 13px;
}

.banner__title span:nth-child(3) i{
    font-size: 10px;
    color: yellow;
}
.banner__title button{
    background-color: #7f54b3;
        border: none;
        outline: none;
        color: #fff;
        padding:7px 15px;
        font-size: 14px;
        font-weight: 500;
        border-radius: 5px;
}
.banner__title button:hover{
        background-color: #663B9A;

    }
    .banner__image .image1{
        transform: scaleX(1);
        transition: all 0.5s ease;
    }
    .banner__image .image2{
        position: absolute;
        top: 0;
        left: 0;    
        transform:scaleX(0);
        transition: all 0.5s ease;
    }
    .banner__image:hover .image2{
        transform: scaleX(1);
        transition: all 0.5s ease;
    }
    .banner__image:hover .image1{
        transform: scaleX(0);
        transition: all 0.5s ease;
    }
</style>
