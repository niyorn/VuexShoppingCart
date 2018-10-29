<template>
    <section>
        <h1>Product List</h1>
        <div v-if="loading" class="loader"></div>
        <ul v-else>
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

export default {
    data() {
        return {
            loading: false
        }
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
    .loader {
        height: 4rem;
        width: 4rem;
        background-color: red;
    }


</style>

