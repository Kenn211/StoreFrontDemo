<script setup lang="ts">
import { ref } from "vue";
import { Products, Cart } from "../interfaces/interface";
import axios from "axios";
import Header from "../components/Header/Header.vue";


const allProducts = ref<Products[]>([]);
//Get API products
(async () => {
    try {
        const res = await axios.get(`http://localhost:3000/products`);
        allProducts.value = res.data
    } catch (error) {
        console.log(error)
    }
})()

const cart = ref<Cart[]>([]);
//Get API Cart
(async () => {
    try {
        const res = await axios.get(`http://localhost:3000/cart`);
        cart.value = res.data
    } catch (error) {
        console.error(error);
    }
})();


//Handle Add to Cart
async function handleAddToCart(item: Products) {
    try {
        const currentCartItem = cart.value.filter((cart) => cart.id === item.id);
    let cartUpdate: Cart = {
        id: item.id,
        price: 0,
    };
    console.log(currentCartItem)
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

    forceRerender();
    
    } catch (error) {
        console.error(error);
    }
}

//Handle show product if category = Clothing
async function handleShowClothing() {
    try {
        const res =  await axios.get(`http://localhost:3000/products?category=Clothing`);
        allProducts.value = res.data;
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

//Handle show product if category = Electronics
async function handleShowElectronics(){
    try {
        const res =  await axios.get(`http://localhost:3000/products?category=Electronics`);
        allProducts.value = res.data;
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

//Handle show product if category = Kitchen
async function handleShowKitchen(){
    try {
        const res =  await axios.get(`http://localhost:3000/products?category=Kitchen`);
        allProducts.value = res.data;
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

//Handle show product if category = Music
async function handleShowMusic(){
    try {
        const res =  await axios.get(`http://localhost:3000/products?category=Music`);
        allProducts.value = res.data;
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

//Handle show product if category = Posters
async function handleShowPosters(){
    try {
        const res =  await axios.get(`http://localhost:3000/products?category=Posters`);
        allProducts.value = res.data;
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

//Handle show product if category = Scuba gear
async function handleShowScubaGear(){
    try {
        const res =  await axios.get(`http://localhost:3000/products?category=Scuba Gear`);
        allProducts.value = res.data;
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

//Handle show product if category = Sweatshirts
async function handleShowSweatshirts(){
    try {
        const res =  await axios.get(`http://localhost:3000/products?category=Sweatshirts`);
        allProducts.value = res.data;
        console.log(res.data)
    } catch (error) {
        console.log(error)
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
        showViewCartBtn.value = allProducts.value.map((item) => {
            return {
                flag: false
            }
        })
    }
    showViewCartBtn.value[index].flag = true
}

//re-render Header Component
const componentKey = ref(0);
const forceRerender = () => {
    componentKey.value++
}

function hanldeFilterPriceAndColor(){
    alert("Đừng ấn nữa, cái này với color chưa làm. Ấn cái categories ở trên kìa =)))")
}
</script>

<template>
    <Header :key="componentKey"></Header>
    <div class="pageshop">
        <div class="container">
            <div class="row gx-5">
                <div class="d-flex pagecart-content_header">
                    <div><i class="fas fa-home home-icon"></i></div>
                    <router-link style="color: #43454b" to="/">Home</router-link>
                    <div>
                        <i class="fas fa-arrow-right arrow-icon"></i>
                    </div>
                    <span>Shop</span>
                </div>
                <div class="col-12 col-xl-8 d-flex flex-column">
                    <h1>SHOP</h1>

                    <!---->
                    <div class="img-bg">
                        <div v-for="(item, index) in allProducts">
                            <div v-if="index < 1" class="over-lay d-flex">
                                <div class="img-bg--content">
                                    <h1 class="img-bg--content_name">{{ item.names }}</h1>
                                    <br />
                                    <span class="img-bg--content_desc">{{
                                    item.description
                                    }}</span>
                                    <br />
                                    <div class="d-flex">
                                        <Button @click="handleAddToCart(item)" class="img-bg--content_btn_add">Add to
                                            cart</Button>
                                        <span style="margin-top: 26px; font-weight: 700">${{ item.price }}</span>
                                    </div>
                                    <br />
                                    <router-link :to="{ name: 'details', params: { idProduct: item.id } }">
                                        <button class="img-bg--content_btn_details">
                                            More Details
                                        </button>
                                    </router-link>
                                </div>
                                <div class="img-bg-img">
                                    <img src="../assets/scuba.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!---->
                    <div class="product-shop-top">
                        <select class="product-shop-select" aria-label="Default select example">
                            <option value="1">Sort by popularity</option>
                            <option value="2">Sort by average rating</option>
                            <option value="3" selected>Sort by latest</option>
                            <option value="4">Sort by price: low to high</option>
                            <option value="5">Sort by price: high to low</option>
                        </select>

                        <span>Showing 1–16 of 126 results</span>

                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link page-link-title" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">1</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">2</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">3</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">...</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">4</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">5</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">6</a></li>
                                <li class="page-item">
                                    <a class="page-link page-link-title" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!---->
                    <div class="product-shop-item">
                        <div class="products-recent">
                            <div class="banner__product" v-for="(item, index) in allProducts">
                                <div v-if="index < 16">
                                    <router-link :to="{ name: 'details', params: { idProduct: item.id } }">
                                        <div class="banner__image">
                                            <img class="image1" src="../assets/denim-shirt.webp" alt="" />
                                            <img class="image2" src="../assets/pink-blouse.webp" alt="" />
                                        </div>
                                    </router-link>
                                    <div class="banner__title">
                                        <span>{{ item.names }}</span><br />
                                        <span>${{ item.price }}</span><br />
                                        <button @click="
                                          handleAddToCart(item);
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
                    </div>


                    <!---->
                    <div class="product-shop-bottom">
                        <select class="product-shop-select" aria-label="Default select example">
                            <option value="1">Sort by popularity</option>
                            <option value="2">Sort by average rating</option>
                            <option value="3" selected>Sort by latest</option>
                            <option value="4">Sort by price: low to high</option>
                            <option value="5">Sort by price: high to low</option>
                        </select>

                        <span>Showing 1–16 of 126 results</span>

                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link page-link-title" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">1</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">2</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">3</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">...</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">4</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">5</a></li>
                                <li class="page-item"><a class="page-link page-link-title" href="#">6</a></li>
                                <li class="page-item">
                                    <a class="page-link page-link-title" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="col-4 filter-categories">
                    <h5 class="filter-categories-title">Product Categories</h5>
                    <hr />
                    <div class="filter-categories-list">
                        <ul class="filter-categories-list-ul">
                            <li  class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a @click="handleShowClothing()">Clothing</a>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a @click="handleShowElectronics()">Electronics</a>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a @click="handleShowKitchen()">Kitchen</a>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a @click="handleShowMusic()">Music</a>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a @click="handleShowPosters()">Posters</a>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a @click="handleShowScubaGear()">Scuba gear</a>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a @click="handleShowSweatshirts()">Sweatshirts</a>
                            </li>
                        </ul>
                    </div>

                    <div class="filter-price">
                        <h5>Filter by price</h5>
                        <hr />
                        <div class="input-range">
                            <input type="range" class="form-range" min="0" max="1500" id="customRange2">
                        </div>
                        <button @click="hanldeFilterPriceAndColor()" class="btn-add-cart">Filter</button>
                        <span>Price:$1000</span>
                    </div>

                    <div class="filter-categories-list">
                        <h5 class="filter-categories-title">Filter by color</h5>
                        <hr />
                        <ul class="filter-categories-list-ul">
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a href="">Black</a>
                                <span style="float: right;">(7)</span>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a href="">Blue</a>
                                <span style="float: right;">(21)</span>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a href="">Brown</a>
                                <span style="float: right;">(21)</span>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a href="">Green</a>
                                <span style="float: right;">(21)</span>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a href="">Grey</a>
                                <span style="float: right;">(21)</span>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a href="">Pink</a>
                                <span style="float: right;">(21)</span>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a href="">Red</a>
                                <span style="float: right;">(21)</span>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a href="">White</a>
                                <span style="float: right;">(21)</span>
                            </li>
                            <li class="filter-categories-list_item">
                                <i class="fas fa-folder"></i>
                                <a href="">Yellow</a>
                                <span style="float: right;">(21)</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pageshop {
    width: 100%;
    height: auto;
}

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

.img-bg {
    background-image: url("../assets/f9c22c58.jpeg");
    width: 100%;
    max-height: 443px;
    display: block;
    margin-bottom: 50px;
}

.over-lay {
    padding: 42px;
    color: #fff;
}

.img-bg-img {
    margin-top: 10%;
}

.img-bg-img img {
    width: 280px;
}

.img-bg--content_name {
    font-weight: 900;
}

.btn-view-cart-link {
    display: block;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
}

.img-bg--content_btn_add,
.img-bg--content_btn_details {
    padding: 8px 18px;
    width: 40%;
    display: flex;
    justify-content: center;
    background-color: #7f54b3;
    color: white;
    outline: none;
    border: none;
}

.img-bg--content_btn_add {
    margin-top: 20px;
    margin-right: 20px;
}

.img-bg--content_btn_add:hover {
    background-color: #663b9a;
}

.img-bg--content_btn_details {
    margin-top: 10px;
    background-color: #2c2d33;
}

.img-bg--content_btn_details:hover {
    background-color: #13141a;
}


/** */
.product-shop-top {
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
}

.product-shop-bottom {
    margin-top: 10rem;
    height: 55%;
    display: flex;
    justify-content: space-between;
}

.product-shop-bottom span,
.product-shop-top span {
    font-size: 14px;
}

.product-shop-select {
    height: 55%;
}

.page-link-title {
    color: #2c2d33;
}

/** */
.filter-categories-title {
    margin-bottom: 32px;
    opacity: 0.7;
}

.filter-categories-list {
    margin-bottom: 5rem;
}

.filter-categories-list_item {
    padding-bottom: 10px;
}

.filter-categories-list_item i {
    margin-right: 10px;
}

.filter-categories-list_item a {
    color: #656971;
}

.filter-categories-list_item a:hover {
    text-decoration: underline;
}

.filter-price {
    margin-bottom: 50px;
}

.filter-price h5 {
    opacity: 0.7;
}

.filter-price span {
    font-size: 14px;
    float: right;
}

.filter-price button {
    margin: 0;
}

/** */
.products-recent {
    display: grid;
    grid-template-columns: 23.5% 23.5% 23.5% 23.5%;
    grid-gap: 2%;
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

@media only screen and (max-width: 576px) {

    .product-shop-bottom,
    .product-shop-top,
    .filter-categories {
        display: none;
    }

    .products-recent {
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 0;
    }


    .img-bg {
        display: none;
    }

}
</style>
