<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="row">
            <section class="col fotter mt-5">
                <h2 class="fotter_title mt-5">See what customers say about our Flying Ninja</h2>
                <div class="fotter-content">
                    <div class="fotter-content_item">
                        <img src="../../assets/poster_2_up.webp" alt="">
                        <br/>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span><br/>
                        <div>
                            <span>Flying Ninja </span> 
                            <span>(</span>
                            <span>$15.00 </span> 
                            <span>$12.00</span>
                            <span>)</span>
                        </div>
                        <br/>
                        <div>This is a fantasic quality print and is happily hanging framed on my wall</div>
                        <br/>
                        <a href="#">View this product <i class="fas fa-long-arrow-alt-right"></i></a>
                        <br/>
                        <div class="fotter-content-item_author">
                            <div><img src="../../assets/7a6df00789e50714fcde1b759befcc84.jpeg" alt=""></div>
                            <Span>Start</Span>
                            <br/>
                            <span> 2013-06-07 12:59:49</span>
                        </div>
                    </div>
                    
                    <div class="fotter-content_item">
                        <img src="../../assets/poster_2_up.webp" alt="">
                        <br/>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span>
                        <br/>
                        <div>
                            <span>Flying Ninja </span> 
                            <span>(</span>
                            <span>$15.00 </span> 
                            <span>$12.00</span>
                            <span>)</span>
                        </div>
                        <br/>
                        <div>This is my favourite poster. In fact, I've ordered 5 of them !</div>
                        <br/>
                        <a href="#">View this product <i class="fas fa-long-arrow-alt-right"></i></a>
                        <br/>
                        <div class="fotter-content-item_author">
                            <div><img src="../../assets/3472757f6a3732d6470f98d7d7e9cece.png" alt=""></div>
                            <Span>Coen</Span>
                            <br/>
                            <span> 2013-06-07 12:19:29</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>

    .fotter-content {
        display: grid;
        grid-template-columns: 47% 47%;
        gap: 6%;
        overflow: hidden;
        margin-top: 5rem;
    }
    .fotter{
        cursor: pointer;
    }
    .fotter_title {
        text-align: center;
        margin-bottom: 40px;
        font-weight: 50;
    }

    .fotter-content_item img{
        border-radius: 5px;
    }

    .fotter-content_item span:nth-child(3) i{
        color: yellow;
    }

    .fotter-content_item :nth-child(5){
        margin-top: 20px;
    }

    .fotter-content_item :nth-child(5) span{
        font-weight: 600;
        font-size: 14px;        
    }

    .fotter-content_item :nth-child(5) span:nth-child(3){
        text-decoration: line-through;
        font-weight: 100;
        opacity: 0.5;       
    }
    .fotter-content_item h5 {
        margin-top: 20px;
        text-align: center;
        font-size: 15px;
    }

    .fotter-content_item a {
        color: #663B9A;
    }

    .fotter-content-item_author {
        margin-top: 5rem;
        position: relative;
    }

    .fotter-content-item_author div img {
        border-radius: 50%;
    }

    .fotter-content-item_author span:nth-child(2) {
        position: absolute;
        font-size: 15px;
        top: 10px;
        left: 110px;
    }

    .fotter-content-item_author span:nth-child(4) {
        position: absolute;
        font-size: 12px;
        top: 40px;
        left: 110px;
    }

    @media only screen and (max-width: 576px){
  .fotter-content{
    display: grid;
        grid-template-columns:100%;
        gap: 0;
}
}
</style>