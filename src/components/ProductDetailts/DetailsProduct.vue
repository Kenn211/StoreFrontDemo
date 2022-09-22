<script setup lang="ts">
import axios from 'axios';
import { ref, reactive } from 'vue';
import { Products, Cart } from '../interfaces/interface';
import MayLike from './MayLike.vue';
import RelatedProducts from './RelatedProducts.vue';
import { useRoute } from "vue-router";
import Header from '../Header/Header.vue';

const {
    params: { idProduct }
} = useRoute();

//Get API products
const listDetailsProduct = reactive<Products>({
    id: 0,
    price: 0,
})
axios.get('http://localhost:3000/products/' + idProduct)
    .then((response) => response.data)
    .then((data: Products) => {
        Object.assign(listDetailsProduct, data);
    })
    .catch((error) => {
        console.log(error);
    });

//Get API cart
let cart = ref<Cart[]>([]);
axios
    .get("http://localhost:3000/cart")
    .then((response) => {
        cart.value = response.data;
    })
    .catch((error) => {
        console.log(error);
    });



const quantityDetailsProduct = ref<number>(1)
//Handle add to cart
function addToCartDetails() {
    const currentCartItem = cart.value.filter((cart) => cart.id === listDetailsProduct.id);
    let cartUpdate: Cart = {
        id: listDetailsProduct.id,
        price: 0,
    };
    if (currentCartItem.length > 0) {
        cart.value = cart.value.map((cart) => {
            if (cart.id === currentCartItem[0].id) {
                cartUpdate = {
                    ...cart,
                    quantity: (cart.quantity || 0) + quantityDetailsProduct.value,
                };
                return cartUpdate;
            }
            return cart;
        });
        axios.patch(
            "http://localhost:3000/cart/" + currentCartItem[0].id,
            cartUpdate
        );
    } else {
        axios.post("http://localhost:3000/cart", {
            ...listDetailsProduct,
            quantity: quantityDetailsProduct,
        });
    }
    forceRerender();
}

//re-render Header Component
const componentKey = ref(0);
const forceRerender = () => {
    componentKey.value++
}



</script>

<template>
    <Header :key="componentKey"></Header>
    <div class="product-detailts">
        <div class="container">

            <!------------------------------------------------------------------>
            <div class="row px-5 mx-5 d-flex">
                <div class="d-flex pagecart-content_header">
                    <div><i class="fas fa-home home-icon"></i></div>
                    <span>Home</span>
                    <div>
                        <i class="fas fa-arrow-right arrow-icon"></i>
                    </div>
                    <span>Clothing</span>
                    <div>
                        <i class="fas fa-arrow-right arrow-icon"></i>
                    </div>
                    <span>Bag</span>
                    <div>
                        <i class="fas fa-arrow-right arrow-icon"></i>
                    </div>
                    <span>Happy Ninja</span>
                </div>
            </div>

            <!------------------------------------------------------------------>

            <div class="row px-5 mx-5 d-flex">
                <div class="col-4">
                    <div>
                        <img class="rounded" src="../../assets/T_7_front.webp" alt="" />
                    </div>

                    <div class="my-2">
                        <img class="rounded mx-5" src="../../assets/T_7_front.webp" width="15%" alt="">
                        <img class="rounded mx-5" src="../../assets/T_7_back.webp" width="15%" alt="">
                    </div>
                </div>

                <div class="col-5 desc-title">
                    <h1>{{listDetailsProduct.names}}</h1>

                    <div class="desc-title_icon_star">
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span>
                        <span>
                            (2 customers review)
                        </span>
                    </div>

                    <div class="desc-title_price">
                        <span>${{listDetailsProduct.price}}</span>
                    </div>

                    <div class="desc-content">
                        <span>
                            {{listDetailsProduct.description}}
                        </span>
                    </div>

                    <div class="desc-submit">
                        <input v-model="quantityDetailsProduct" type="number" step="1" min="1" size="4" title="Qty"
                            autocomplete="off"
                            style="width: 15%; outline: none; height: 40px; background-color: #f8f8f8;">
                        <button @click="addToCartDetails()">Add to cart</button>
                    </div>
                    <hr />

                    <div>
                        <span>Category: <a href="#">{{listDetailsProduct.category}}</a></span>
                    </div>
                </div>
            </div>

            <!------------------------------------------------------------------>
            <hr />
            <div class="row px-5 mx-5">
                <div class="col-9 d-flex">
                    <div class="d-flex flex-column">
                        <div class="description">
                            <span>
                                Desription
                            </span>
                        </div>
                        <div class="review">
                            <a>
                                Reviews (2)
                            </a>
                        </div>
                    </div>

                    <div>
                        <div class="description-title">
                            <h4>Description</h4>
                            <span>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                                Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                                placerat eleifend leo.</span>
                        </div>
                        <div class="review-title">
                            <h4>2 reviews for Happy Ninja</h4>
                            <span>This will go great with my Hoodie that I ordered a few weeks ago.</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-------------------------------------------------------------------------------------->
            <hr />
        </div>
        <MayLike></MayLike>
        <RelatedProducts></RelatedProducts>
    </div>
</template>

<style scoped>
.pagecart-content_header {
    font-size: 14px;
    margin-top: 2rem;
    margin-bottom: 5rem;
}

.home-icon {
    font-size: 15px;
    margin-right: 5px;
}

.arrow-icon {
    font-size: 10px;
    margin: 0 8px;
    opacity: 0.5;
}

.pagecart-content_title {
    font-size: 40px;
    margin-bottom: 1rem;
}

.desc-title h1 {
    font-weight: 100;
    margin-bottom: 10px;
}

.desc-title_icon_star span:first-child {
    color: yellow;
}

.desc-title_icon_star span:last-child {
    font-size: 14px;
    font-weight: 600;
    opacity: 0.8;
}

.desc-title_icon_star {
    margin-bottom: 30px;
}

.desc-title_price {
    font-size: 20px;
    margin-bottom: 25px;
}

.desc-content {
    font-size: 15px;
    opacity: 0.8;
    margin-bottom: 25px;
}

.desc-submit {
    margin-bottom: 60px;
}

.desc-submit button {
    width: 25%;
    height: 40px;
    margin-left: 10px;
    color: #fff;
    background-color: black;
}

.desc-submit input:focus {
    border: 2px solid #663B9A
}


.desc-submit button:hover {
    opacity: 0.8;
}

.description {
    padding: 20px 30px 20px 0px;
}

.description:focus-visible {
    border-right: 2px solid #663B9A;
    border-bottom: 2px solid #663B9A;
    border-top: 2px solid #663B9A;
}

.review {
    padding: 20px 30px 20px 0px;
}
</style>