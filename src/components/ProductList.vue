<template>
    <section class="product-list-container">
        <h1>Product List</h1>
        <loader v-if="loading"/>
        <ul v-else class="product-container">
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price}} - {{product.inventory}}
                <button 
                    :disabled="!productIsInStock(product)"
                    v-on:click="addProductToCart(product)"
                >Add to cart</button>
            </li>
        </ul>
    </section>
    
</template>

<script>
import {mapState} from 'vuex'
import Loader from './Loader.vue'

export default {
    data() {
        return {
            loading: false
        }
    },
    components: {
        Loader
    },
    computed: {
        products() {
            return this.$store.state.products.products
        },
        productIsInStock() {
            return this.$store.getters["products/productIsInStock"]
        }
    },
    methods: {
        addProductToCart(product) {
            this.$store.dispatch("cart/addProductToCart", product)
        }
    },
    created() {
        this.loading = true
        this.$store.dispatch('products/fetchProducts')
            .then(() => this.loading = false)
    }
}
</script>

<style scoped>
    .product-list-container {
        grid-area: product;
        padding: 2rem;
    }

    h1 {
        font-size: 3em;
        border-bottom: solid 0.1rem rgba(0, 0, 0, 0.7);
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

    .product-container li button {
        margin-left: auto;
        padding: 0.4rem;
        border: none;
        background-color: aquamarine;
    }
</style>

