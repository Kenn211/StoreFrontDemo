<script setup lang="ts">
import axios from "axios";
import { ref, Ref } from "vue";
import { Cart } from "../interfaces/interface";

//Get API cart
let cart = ref<Cart[]>([]);
axios
  .get("http://localhost:3000/cart")
  .then((response) => {
    cart.value = response.data;

    subTotal.value = 0;
    cart.value.map((item) => {
      subTotal.value += item.price * (item.quantity || 0);
    });
  })
  .catch((error) => {
    console.log(error);
  });


let subTotal: Ref<number> = ref(0);
//Handle delete item cart
function handleDeleteItemCart(id: number): void {
  axios.delete("http://localhost:3000/cart/" + id);
  cart.value = cart.value.filter((item) => {
    return item.id != id;
  });

  subTotal.value = 0;
  cart.value.map((item) => {
    subTotal.value += item.price * (item.quantity || 0);
  });
}


//Get Total Price
function getTotalPrice() {
  let totalPrice = 0;
  cart.value.map((item: Cart) => {
    totalPrice += (item.price * (item.quantity || 0));
  });
  return totalPrice.toFixed(2);
}


//Get Total Quantity
function getTotalQuantity() {
  let quantity = 0;
  cart.value.map(() => {
    quantity++;
  });
  return quantity;
}


</script>

<template>
  <div class="col header-bottom_categories">
    <div>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link1" href="#">Blog</a>
        </li>
        <router-link to="/shop">
          <li class="nav-item">
            <a class="nav-link1" href="#">Shop</a>
          </li>
        </router-link>
        <li class="nav-item">
          <a class="nav-link1" href="#">Single Product Homepage Example</a>
        </li>
        <li class="nav-item">
          <a class="nav-link1" href="#">Prixing Tables</a>
        </li>
        <li class="nav-item">
          <a class="nav-link1" href="#">Review</a>
        </li>
      </ul>
    </div>

    <div class="cart">
      <div class="cart-total">
        <span>
          <i class="fas fa-dollar-sign"></i>
          {{ getTotalPrice() }}
        </span>
        <span> {{ getTotalQuantity() }} items </span>
      </div>
      <i class="fas fa-shopping-cart cart-hover-icon"></i>

      <ul class="cart-hover" v-if="$route.name != 'pagecartt'">
        <li v-for="item in cart">
          <div class="cart-item-not-empty d-flex justify-content-between">
            <div class="cart-item-not-empty_title">
              <i @click="handleDeleteItemCart(item.id)" class="fas fa-window-close"></i>
              <span>{{item.names}}</span>
            </div>
            <img src="../../assets/cd_5_angle.webp" alt="">
          </div>
          <div class="cart-item-not-empty_price">
            <span>{{item.quantity}}</span> <span>x</span> <span>${{item.price}}</span>
          </div>
        </li>
        <li class="cart-item-empty" v-if="cart.length === 0">No products in the cart.</li>
        <li>
          <div class="cart-item-button">
            <div>
              <span>Subtotal: ${{subTotal.toFixed(2)}}</span>
            </div>
            <router-link class="btn-view-cart-link" to="/pagecart">
              <button class="btn-view-cart">View Cart <i class="fa fa-arrow-right"></i></button>
            </router-link>
            <button class="btn-check-out">Check Out <i class="fa fa-arrow-right"></i></button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header-bottom_categories {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 576px) {
  .header-bottom_categories {
    display: none;
  }
}

.nav-item {
  padding: 45px 30px 20px 0px;
  font-size: 15px;
}

.nav-item .nav-link1 {
  color: #d5d9db;
}

.nav-link1:hover {
  color: #fff;
}

.cart {
  padding: 45px 0px 20px 0px;
  font-size: 15px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  display: flex;
  width: 300px;
}

.cart-hover {
  position: absolute;
  display: none;
  background-color: #333;
  z-index: 20;
  margin-top: 20px;
  width: 100%;
  height: auto;
}

.cart-hover li {
  color: #d5d9db;
  background-color: black;
  display: block;
  width: 100%;
  padding: 15px 10px;
  height: auto;
}

.cart-hover li:hover {
  color: #fff;
  background-color: #1d1e24;
}

.cart-hover li:last-child {
  color: #fff;
  background-color: #222329;
}

.cart .cart-total {
  color: #d5d9db;
  width: 100%;
  display: flex;
}

.cart-total span:last-child{
  font-size: 12px;
  margin-left: 10px;
  margin-top: 2.5px;
}

.cart:hover a,
.cart:hover .cart-hover-icon {
  color: #fff;
}

.cart:hover .cart-hover {
  display: block;
}

.cart a span:last-child {
  font-size: 12px;
}

.cart i {
  font-size: 14px;
  color: #d5d9db;
}

.cart-item-not-empty img {
  width: 20%;
  height: 50px;
  margin-left: 5px;
}

.cart-item-not-empty_title i {
  padding-right: 10px;
  border-radius: 50%;
}

.cart-item-not-empty_price {
  font-size: 12px;
}

.cart-item-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-item-button div {
  margin-bottom: 2rem;
}

.btn-view-cart-link {
  display: block;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
}

.btn-view-cart,
.btn-check-out {
  padding: 8px 18px;
  width: 80%;
  display: flex;
  justify-content: center;
  background-color: #7f54b3;
  color: white;
  outline: none;
  border: none;
}

.btn-check-out {
  margin-top: 10px;
  background-color: #2c2d33;
}

.btn-check-out:hover {
  background-color: #13141a;
}


.btn-view-cart i,
.btn-check-out i {
  color: white;
  font-size: 18px;
  display: block;
  margin-top: 2px;
  margin-left: 10px;

}



.btn-view-cart:hover {
  background-color: #663B9A;

}
</style>
