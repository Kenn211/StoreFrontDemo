<script setup lang="ts">
import axios from "axios";
import { defineProps, ref} from "vue";
import { Products, Cart } from "../../interfaces/interface";

//list Product
const props = defineProps<{
    listProduct: Products[];
}>();

//list Cart
const cart = ref<Cart[]>([]);
//Get API Cart
(async() => {
    try {
        const res = await axios.get(`http://localhost:3000/cart`);
        cart.value = res.data
    } catch (error) {
        console.error(error);
    }
})();

//Handle Add to Cart
async function handleAddToCart(item: Products) {
    const currentCartItem = cart.value.filter((cart) => cart.id === item.id);
    let cartUpdate: Cart = {
        id: item.id,
        price: 0,
    };
    if (currentCartItem.length > 0) {
        cart.value = cart.value.map((cart) => {
            if (cart.id === currentCartItem[0].id) {
                cartUpdate = {
                    ...cart,
                    quantity: (cart.quantity || 0) + 1,
                };
                return cartUpdate;
            }
            return cart;
        });
        await axios.patch(`${`http://localhost:3000/cart/`}${currentCartItem[0].id}`, cartUpdate);
    } else {
        await axios.post(`http://localhost:3000/cart`, {
            ...item,
            quantity: 1,
        });
    }
}

//Show btn View-Cart
interface ShowViewCart {
    flag: boolean;
}
const showViewCartBtn = ref<ShowViewCart[]>([]);

function handleShowViewCartBtn(index: number): void {
    if (showViewCartBtn.value.length > 0) {
        showViewCartBtn.value = showViewCartBtn.value.map((item) => {
            if (item.flag === true) {
                return {
                    flag: true
                };
            }
            return {
                flag: false
            }
        })
    } else {
        showViewCartBtn.value = props.listProduct.map((item) => {
            return {
                flag: false
            }
        })
    }
    showViewCartBtn.value[index].flag = true
}
</script>

<template>
    <div class="container">

        <!-- Recent Products -->
        <div class="row d-flex flex-column">
            <section class="col products-recent_category mt-5">
                <h2 class="products-recent_title mt-5">Recent Products</h2>
                <div class="products-recent">
                    <div class="banner__product">
                        <router-link to="/details">
                            <div class="banner__image">
                                <img class="image1" src="../../assets/dslr-kit.webp" alt="" />
                                <img class="image2" src="../../assets/clothing.webp" alt="" />
                            </div>
                        </router-link>
                        <div class="banner__title">
                            <span>Build by Vanh</span><br />
                            <br />
                            <button class="btn-add-cart">Read More</button>
                        </div>
                    </div>

                    <div class="banner__product" v-for="(item, index) in props.listProduct">
                        <div v-if="index < 3">
                            <router-link :to="{ name: 'details', params: { idProduct: item.id } }">
                                <div class="banner__image">
                                    <img class="image1" src="../../assets/cd_5_angle.webp" alt="" />
                                    <img class="image2" src="../../assets/cd_5_flat.webp" alt="" />
                                </div>
                            </router-link>
                            <div class="banner__title">
                                <span>{{ item.names }}</span><br />
                                <span>${{ item.price }}</span><br />
                                <button @click="
                                  handleAddToCart(item);
                                  $emit('rerenderHeader');
                                  handleShowViewCartBtn(index);
                                " class="btn-add-cart">
                                    Add to cart
                                </button>
                                <router-link to="/pagecart" v-if="showViewCartBtn[index]?.flag"><button
                                        class="btn-view-cart">
                                        View Cart<i class="fas fa-arrow-right"></i></button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        <!-- Top Rated Products  -->
        <div class="row d-flex flex-column">
            <section class="col products-recent_category mt-5">
                <h2 class="products-recent_title mt-5">Top Rate Products</h2>
                <div class="products-recent">

                    <div class="banner__product" v-for="(item, index) in props.listProduct">
                        <div v-if="(4 <= index) && (index < 8)">
                            <router-link :to="{ name: 'details', params: { idProduct: item.id } }">
                                <div class="banner__image">
                                    <img class="image1" src="../../assets/T_7_front.webp" alt="" />
                                    <img class="image2" src="../../assets/T_7_back.webp" alt="" />
                                </div>
                            </router-link>
                            <div class="banner__title">
                                <span>{{ item.names }}</span><br />
                                <span class="icon-rate">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </span><br />
                                <span>${{ item.price }}</span><br />
                                <button @click="
                                  handleAddToCart(item);
                                  $emit('rerenderHeader');
                                  handleShowViewCartBtn(index);
                                " class="btn-add-cart">
                                    Add to cart
                                </button>
                                <router-link to="/pagecart" v-if="showViewCartBtn[index]?.flag"><button
                                        class="btn-view-cart">
                                        View Cart<i class="fas fa-arrow-right"></i></button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        <!--On Sale Products-->
        <div class="row d-flex flex-column">
            <section class="col products-recent_category mt-5">
                <h2 class="products-recent_title mt-5">On Sale Products</h2>
                <div class="products-recent">

                    <div class="banner__product" v-for="(item, index) in props.listProduct">
                        <div v-if="(8 <= index) && (index < 12)">
                            <router-link :to="{ name: 'details', params: { idProduct: item.id } }">
                                <div class="banner__image">
                                    <img class="image1" src="../../assets/T_5_front.webp" alt="" />
                                    <img class="image2" src="../../assets/T_5_back.webp" alt="" />
                                </div>
                            </router-link>
                            <div class="banner__title">
                                <span>{{ item.names }}</span><br />
                                <div class="sale">
                                    <div>Sale!</div>
                                </div> <br />
                                <span class="sale-price">$99.00</span>
                                <span>${{ item.price }}</span><br />
                                <button @click="
                                  handleAddToCart(item);
                                  $emit('rerenderHeader');
                                  handleShowViewCartBtn(index);
                                " class="btn-add-cart">
                                    Add to cart
                                </button>
                                <router-link to="/pagecart" v-if="showViewCartBtn[index]?.flag"><button
                                        class="btn-view-cart">
                                        View Cart<i class="fas fa-arrow-right"></i></button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        <!--On Sale Products-->
        <div class="row d-flex flex-column">
            <section class="col products-recent_category mt-5">
                <h2 class="products-recent_title mt-5">On Sale Products</h2>
                <div class="products-recent">

                    <div class="banner__product" v-for="(item, index) in props.listProduct">
                        <div v-if="(12 <= index) && (index < 16)">
                            <router-link :to="{ name: 'details', params: { idProduct: item.id } }">
                                <div class="banner__image">
                                    <img class="image1" src="../../assets/hoodie_3_front.webp" alt="" />
                                    <img class="image2" src="../../assets/hoodie_3_back.webp" alt="" />
                                </div>
                            </router-link>
                            <div class="banner__title">
                                <span>{{ item.names }}</span><br />
                                <div class="sale">
                                    <div>Sale!</div>
                                </div> <br />
                                <span class="sale-price">$99.00</span>
                                <span>${{ item.price }}</span><br />
                                <button @click="
                                  handleAddToCart(item);
                                  $emit('rerenderHeader');
                                  handleShowViewCartBtn(index);
                                " class="btn-add-cart">
                                    Add to cart
                                </button>
                                <router-link to="/pagecart" v-if="showViewCartBtn[index]?.flag"><button
                                        class="btn-view-cart">
                                        View Cart<i class="fas fa-arrow-right"></i></button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>

<style scoped>
.products-recent_title {
    text-align: center;
    margin-bottom: 40px;
}

.products-recent {
    display: grid;
    grid-template-columns: 23.5% 23.5% 23.5% 23.5%;
    grid-gap: 2%;
}

@media only screen and (max-width: 576px){
    .products-recent {
    display: grid;
    grid-template-columns: 100%;
    gap: 0;
    
}
}

.banner__product {
    cursor: pointer;
    text-align: center;
}

.banner__image {
    position: relative;
}

.banner__image img {
    border-radius: 5px;
    width: 100%;
}

.banner__title {
    font-size: 14px;
    display: block;
    margin-top: 10px;
}

.banner__title span:nth-child(3) {
    font-size: 13px;
}

.btn-add-cart {
    background-color: #7f54b3;
    border: none;
    outline: none;
    color: #fff;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 500;
    margin-top: 20px;
}

.btn-view-cart {
    outline: none;
    background-color: black;
    color: #fff;
    padding: 4px 15px;
    font-size: 12px;
}

.btn-add-cart:hover {
    background-color: #663b9a;
}

.banner__image .image1 {
    transform: scaleX(1);
    transition: all 0.5s ease;
}

.banner__image .image2 {
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transition: all 0.5s ease;
}

.banner__image:hover .image2 {
    transform: scaleX(1);
    transition: all 0.5s ease;
}

.banner__image:hover .image1 {
    transform: scaleX(0);
    transition: all 0.5s ease;
}

/* */
.icon-rate i {
    font-size: 10px;
    color: yellow;
}

/* */
.banner__title .sale div {
    border: 1px solid #000;
    width: 20%;
    padding: 1px;
    border-radius: 5px;
}

.banner__title .sale {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.sale-price {
    font-size: 13px;
    text-decoration: line-through;
    opacity: 0.5;
}
</style>
