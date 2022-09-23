<script setup lang="ts">
import { ref } from "vue";
import { Cart } from "../interfaces/interface"
import axios from "axios";
import Header from '../components/Header/Header.vue';

let cart = ref<Cart[]>([]);
//Get API cart
(async () => {
    try {
        const res = await axios.get(`http://localhost:3000/cart`);
        cart.value = res.data

        getSubTotal();
    } catch (error) {
        console.error(error);
    }
})();

//get SubTotal
let subTotal = ref<number>(0);
function getSubTotal() {
    subTotal.value = 0;
    cart.value.map((item) => {
        subTotal.value += item.price * (item.quantity || 0);
    });
    console.log(subTotal.value);
}

//Handle delete item cart
async function handleDeleteItemCart(id: number) {
    try {
        await axios.delete(`http://localhost:3000/cart/${id}`);
        cart.value = cart.value.filter((item) => {
            if (item.id === id) {
                undoProduct.value = item;
            }
            return item.id != id;
        });

        undoDelete.value = true
        updateStatusButton.value = false;
        showAlertCouponIncorrect.value = false;
        showAlertCoupon.value = false;
        updateAlert.value = false;

        forceRerender();
        getSubTotal();
    } catch (error) {
        console.log(error);
    }
}

//Undo Delete
let undoDelete = ref<boolean>(false);
let undoProduct = ref<Cart>({
    id: 0,
    price: 0
});
async function undo() {
    try {
        await axios.post(`http://localhost:3000/cart`, undoProduct.value)
        cart.value.push(undoProduct.value);

        undoDelete.value = false;

        forceRerender();
    } catch (error) {
        console.error(error);
    }
}


let updateAlert = ref<boolean>(false);
//Handle update item cart
async function handleUpdateItemCart() {
    try {
        for (let index = 0; index < cart.value.length; index++) {
            await axios.patch(`${`http://localhost:3000/cart/`}${cart.value[index].id}`, cart.value[index]);
        }

        updateAlert.value = true;

        getSubTotal();
        forceRerender();
    } catch (error) {
        console.log(error);
    }
}


//status button update
let updateStatusButton = ref<boolean>(true);
function handleUpdateStatus(): void {
    updateStatusButton.value = false;
}

//coupon Code
let couponCode = ref<string>('');
let showAlertCoupon = ref<boolean>(false);
let showAlertCouponIncorrect = ref<boolean>(false);
function handleCoupon(): void {
    if (couponCode.value == '') {
        showAlertCoupon.value = true;
        showAlertCouponIncorrect.value = false;
    } else {
        showAlertCoupon.value = false;
        showAlertCouponIncorrect.value = true;
    }
}

//Re-render header
const componentKey = ref(0);
const forceRerender = () => {
    componentKey.value++
}
</script>

<template>
    <Header :key="componentKey"></Header>
    <div class="pageCart">
        <div class="container">
            <div class="row d-flex flex-column">
                <div class="col">
                    <div class="d-flex pagecart-content_header">
                        <div><i class="fas fa-home home-icon"></i></div>
                        <router-link style="color: #43454b" to="/">Home</router-link>
                        <div>
                            <i class="fas fa-arrow-right arrow-icon"></i>
                        </div>
                        <span>Cart</span>
                    </div>

                    <div class="pagecart-content">
                        <div class="pagecart-content_title"><span>Cart</span></div>
                        <div>
                            <div v-if="cart.length === 0" class="alert alert-primary" role="alert">
                                Your cart is currently empty.
                            </div>

                            <div v-show="updateAlert" class="alert alert-info cart-update" role="alert">
                                Cart updated
                            </div>

                            <div v-if="showAlertCoupon" class="alert alert-danger" role="alert">
                                Please enter a coupon code.
                            </div>

                            <div v-if="showAlertCouponIncorrect" class="alert alert-danger" role="alert">
                                Coupon "{{couponCode}}" does not exist!
                            </div>

                            <div v-if="undoDelete" class="alert alert-info" role="alert">
                                “{{ undoProduct?.names }}” removed. <a href="javascript:"
                                    @click.prevent="undo()">Undo?</a>
                            </div>

                            <table v-if="cart.length > 0" class="table">
                                <thead>
                                    <tr class="table-header">
                                        <th class="product-remove">&nbsp;</th>
                                        <th class="product-thumbnail">&nbsp;</th>
                                        <th class="product-name">Product</th>
                                        <th class="product-price">Price</th>
                                        <th class="product-quantity">Quantity</th>
                                        <th class="product-subtotl">Subtotal</th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr class="table-body" v-for="item in cart" key="item.id">
                                        <td>
                                            <a><i @click="handleDeleteItemCart(item.id)" class="fas fa-trash-alt"
                                                    style="color: gray"></i></a>
                                        </td>
                                        <td>
                                            <img src="../assets/T_7_front.webp" style="width: 50%; height: 100%"
                                                alt="" />
                                        </td>
                                        <td>
                                            <span>{{ item.names }}</span>
                                        </td>
                                        <td>
                                            <span>${{ item.price.toFixed(2) }}</span>
                                        </td>
                                        <td>
                                            <input v-model="item.quantity" @change="handleUpdateStatus()" type="number"
                                                step="1" min="0" size="4" autocomplete="off"
                                                style="width: 40%; background-color: #f8f8f8" />
                                        </td>
                                        <td>
                                            <span>${{(item.price * (item?.quantity || 0)).toFixed(2) }}</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="d-flex justify-content-between">
                                            <div class="coupon-code">
                                                <!-- <label for="coupon_code">Coupon:</label> -->
                                                <input type="text" name="coupon_code" v-model="couponCode"
                                                    placeholder="Coupon code" />
                                                <button type="submit" @click="handleCoupon()">Apply coupon</button>
                                            </div>
                                            <button type="submit" @click="handleUpdateItemCart()"
                                                :class="updateStatusButton ? 'btn-disabled' : 'button-update'"
                                                name="update_cart" value="Update cart" aria-disabled="false"
                                                :disabled="updateStatusButton">
                                                Update cart
                                            </button>
                                        </td>
                                    </tr>
                                </thead>
                            </table>

                            <!-- Cart totals -->
                            <div v-if="cart.length > 0" class="d-flex justify-content-end">
                                <div class="d-flex flex-column cart-total">
                                    <h2 class="cart-total_title my-5">Cart totals</h2>
                                    <br />
                                    <div style="background-color: #f8f8f8">
                                        <div class="d-flex justify-content-between cart-total_sub">
                                            <span>Subtotal</span>
                                            <div>${{ subTotal.toFixed(2) }}</div>
                                        </div>
                                        <hr />
                                        <div class="d-flex justify-content-between cart-total_tot">
                                            <span class="">Total</span>
                                            <div>${{ subTotal.toFixed(2) }}</div>
                                        </div>
                                    </div>
                                    <div class="cart-total_complete">
                                        <span>Proceed to checkout <i class="fas fa-arrow-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="cart.length === 0">
                            <router-link to="/">
                                <div class="pagecart-content_back_shop">
                                    <span>Return Shop</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
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
    margin-bottom: 2rem;
}

.pagecart-content_back_shop {
    padding: 10px 10px;
    width: 14%;
    background-color: #663b9a;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
}

.pagecart-content_back_shop span {
    color: #fff;
}

.table {
    border-collapse: unset;
    text-indent: 0;
}

.table-header,
.table-body {
    display: grid;
    grid-template-columns: 5% 25% 25% 15% 15% 15%;
    height: auto;
}

.table-body td {
    width: 100%;
    height: 50%;
}

.table-header {
    background-color: #f8f8f8;
    padding: 20px 0;
}

.coupon-code {
    height: 45px;
    width: 50%;
}

.coupon-code input,
.coupon-code button {
    height: 100%;
}

input:focus {
    outline-color: #663b9a;
}

.coupon-code button {
    background-color: #7f54b3;
    color: #fff;
    border: none;
    margin-left: 1px;
    font-size: 14px;
    width: 25%;
    font-weight: 300;
}

.coupon-code button:hover {
    background-color: #663b9a;
}

.button-update {
    background-color: #7f54b3;
    color: #fff;
    border: none;
    margin-left: 1px;
    font-size: 14px;
    width: 15%;
    font-weight: 300;
}

.button-update:hover {
    background-color: #663b9a;
}

.btn-disabled {
    background-color: #796a8c;
}

.button-disabled:hover {
    background-color: #796a8c !important;
}

.cart-total {
    font-size: 17px;
    width: 50%;
}

.cart-total_sub span {
    padding: 10px;
    font-weight: 600;
}

.cart-total_sub div {
    padding: 10px;
    margin-left: 10rem;
}

.cart-total_tot span {
    padding: 10px;
    font-weight: 600;
}

.cart-total_tot div {
    padding: 10px;
    margin-left: 10rem;
    font-weight: 600;
}

.cart-total_complete {
    height: 70px;
    width: 100%;
    background-color: black;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cart-total_complete:hover {
    opacity: 0.9;
}

.cart-total_complete span {
    padding: 10px;
    color: #fff;
    font-size: 20px;
}
</style>
