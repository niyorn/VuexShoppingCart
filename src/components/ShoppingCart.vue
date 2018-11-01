<template>
    <section class="cart-container">
        <h1>Shopping cart</h1>
        <ul class="product-container">
            <li v-for="product in products" :key="product.id">
                {{product.title}}
                -
                {{product.price}}
                -
                {{product.quantity}}
            </li>
            <p class="total">
                Total: ${{total}}
            </p>

            <button v-on:click="checkout" class="checkout">Checkout</button>
            <p v-if="this.$store.state.cart.checkoutStatus">{{this.$store.state.cart.checkoutStatus}}</p>
        </ul>
    </section>
</template>

<script> 
    export default {
        computed: {
            products() {
                return this.$store.getters['cart/cartProduct']
            },
            total() {
                return this.$store.getters['cart/cartTotal']
            }
        },
        methods: {
            checkout() {
                this.$store.dispatch('cart/checkout')
            }
        }
    }
</script>

<style scoped>
    .cart-container {
        grid-area: cart;
        background-color: rgb(245, 245, 245);
        padding: 2rem;
    }

    h1 {
        font-size: 3em;
        border-bottom: solid 0.1rem rgb(70, 70, 70);
        margin-bottom: 1rem;
    }

    .product-container {
        list-style: none;
    }

    .product-container li {
        padding: 0.2rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .total { 
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-top: 1rem;
        border-top: solid 0.1rem rgb(236, 236, 236);
    }

    .checkout {
        padding: 0.4rem;
        margin-bottom: 1rem;
        border: none;
        background-color: aquamarine;
    }
</style>