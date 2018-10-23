<template>
  <div id="app">
    <ProductList/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'

export default {
  name: 'app',
  components: {
    ProductList
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: sans-serif;
}
</style>
