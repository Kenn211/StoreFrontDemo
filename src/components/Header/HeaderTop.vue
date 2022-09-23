<script setup lang="ts">
</script>

<template>
    <div class="col">
        <div class="header-top">
            <div class="header-top-left">
                <div class="header-top-left_icon">
                    <router-link to="/" class="header-top-left_icon_logo">Storefront</router-link>
                </div>
                <p class="header-top-left_title">WooCommerce</p>

            </div>

            <div class="header-top-right">
                <div class="header-top-right_title">
                    <a href="">My Account</a>
                    <a href="">About this demo</a>
                </div>

                <div class="header-top-right_input">
                    <!-- <i class="fa fa-search"></i> -->
                    <input type="text" class="form-input" placeholder="Search anything...">
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
.header-top {
    display: flex;
    justify-content: space-between;
}

.header-top-left_icon_logo {
    font-weight: 700;
    color: #d5d9db;
    font-size: 32px;
}

.header-top-left_icon_logo:hover {
    color: #fff;
}

.header-top-left_title {
    font-size: 13px;
    margin: 0;
    color: #99a0a7;
}

.header-top-right_title {
    margin-right: 10px;
    margin: 20px 55px 20px 25px;
}

.header-top-right_title a {
    font-size: 13px;
    color: #99a0a7;
}

.header-top-right_title a:first-child {
    margin-right: 30px;
}

.header-top-right_title a:hover {
    color: #fff;
}

.form-input {
    width: 300px;
    height: 70%;
    margin-top: 10px;
}

.header-top-right {
    display: flex;
}


@media (width <=576px) {
    .header-top-right {
        display: none;
    }
}
</style>