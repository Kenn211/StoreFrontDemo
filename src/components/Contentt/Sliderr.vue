<script setup lang="ts">

</script>

<template>
    <div class="container-fluid px-0">
        <div class="video-wrapper">
            <video src="../../assets/Chandelier.mp4" autoplay loop preload="" muted class="sph-video"></video>
            <div class="bg"></div>
            <div class="line">
                    <span></span>
                    <span></span>
                </div>
            <div class="video-title">
                <h1>Spring is here!</h1>

                <span>Like this full screen hero component? Add one to your Storefront powered shop with the Storefront Parallax Hero<br/>extension.</span>
                <br/>
                <router-link to="/shop">
                <button>Go Shopping</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.line{
    position: absolute;
    display: flex;
    top: 35%;
    padding: 0 300px;
    height: 5px;
    width: 100%;
    line-height: 50px;
    
}
@keyframes showline1{
    0%,100%{
width: 455px;
    }
    50%{
        width: 0px;
    }
}
@keyframes showline2{
    0%{
        width: 0px;
    }
    50%{
        width: 910px;
    }
    100%{
width: 0;
    }
}
.line span:first-child{ 
    display: block;
    background-color: transparent;
    width: 455px;
    height: 3px;
    text-align: center;
    animation: showline1 2s ease;
}
.line span:last-child{
    transition: all 1s ease;
    display: block;
    background-color: #663B9A;
    width: 0;
    height: 3px;
    text-align: center;
    animation: showline2 2s ease;
}
    .video-wrapper{
        height: 595px;
        overflow: hidden;
        max-width: 100%;
        position: relative; 
    }
    .bg{
        position: absolute;
        width: 100%;
        height: 595px;
        top: 0;
        background-color: rgba(0, 0, 0, 0.333);
    }
    .video-wrapper video{
        max-width: initial;
    }
    .video-title{
        position:absolute;
        top:20%;
        text-align: center;
        width: 100%;
        color: #fff;
        animation-delay: 3s;
        animation: showtitle 1s ease;
    }
    @keyframes showtitle{
        0%{
            transform: scaleY(0);
        }
        50%{
            transform: scaleY(0);
        }
        100%{
            transform: scaleY(1);
        }
    }
    .video-title h1{
        line-height: 100px;
        font-size: 40px;
        font-weight: 700;
    }
    .video-title button{
        background-color: #7f54b3;
        border: none;
        outline: none;
        color: #fff;
        margin-top: 30px;
        padding:15px 20px;
        font-size: 14px;
        font-weight: 500;
    }

    .video-title button:hover{
        background-color: #663B9A;

    }
</style>