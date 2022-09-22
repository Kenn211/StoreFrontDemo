<script setup lang="ts">
import HeaderTop from './HeaderTop.vue';
import Bottom from './Bottom.vue';


</script>

<template>
    <div class="header">
        <div class="container">
            <div class="row d-flex flex-column">
                <HeaderTop></HeaderTop>
                <Bottom></Bottom>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: #1d1e24;
    width: 100%;
    height: auto;
    padding-top: 42px;
    position: relative;
}

@media only screen and (max-width: 576px) {
    .header {
        padding-top: 20px;
        padding-bottom: 20px;
    }
}
</style>