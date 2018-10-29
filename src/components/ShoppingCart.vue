<template>
    <section>
        <h1>Shopping cart</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.title}}
                -
                {{product.price}}
                -
                {{product.quantity}}
            </li>
            <p>
                Total: ${{total}}
            </p>

            <button v-on:click="checkout">Checkout</button>
            <p v-if="this.$store.state.cart.checkoutStatus">{{this.$store.state.cart.checkoutStatus}}</p>
        </ul>
    </section>
</template>

<script> 
    export default {
        computed: {
            products() {
                // console.log(this.$store.getters.cart/cartTotal)
                return this.$store.getters.cartProduct
            },
            total() {
                return this.$store.getters.cartTotal
            }
        },
        methods: {
            checkout() {
                this.$store.dispatch('checkout')
            }
        }
    }
</script>

<style>

</style>