<template>
    <section>
        <h1>Product List</h1>
        <div v-if="loading" class="loader"></div>
        <ul v-else>
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price}}
            </li>
        </ul>
    </section>
    
</template>

<script>
export default {
    data() {
        return {
            loading: false
        }
    },
    computed: {
        products() {
            return this.$store.getters.availableProducts
        }
    },
    created() {
        this.loading = true
        this.$store.dispatch('fetchProducts')
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

