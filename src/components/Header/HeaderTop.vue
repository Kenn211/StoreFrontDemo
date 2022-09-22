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
            <div class="menu-mobile-header">
                <div class="menu-mobile-icon"><i class="fas fa-bars">Menu</i></div>

                <div class="menu-mobile">
                    <ul class="menu-mobile-list">
                        <li>Home</li>
                        <li>About this demo</li>
                        <li>Blog</li>
                        <li>Cart</li>
                        <li>Checkout</li>
                        <li>My Account</li>
                        <li>Pricing Tables</li>
                        <li>Reviews</li>
                        <li>Sample Page</li>
                        <li>Shop</li>
                        <li>Single Products</li>
                    </ul>
                </div>
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

        <!--Menu in Mobile-->

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

.menu-mobile-icon {
    display: block;
    width: 80px;
    height: 40px;
    background-color: #99a0a7;
}

.header-top-right {
    display: flex;
}

.menu-mobile-header {
    display: none;
}

.menu-mobile-list {
    position: relative;
    width: 100%;
}

@media (width <=576px) {
    .header-top-right {
        display: none;
    }

    .menu-mobile {
        display: block;
    }

    .menu-mobile-list {
        display: none;
    }

    .menu-mobile-icon:focus-visible .menu-mobile-list {
        display: block;
    }

}
</style>