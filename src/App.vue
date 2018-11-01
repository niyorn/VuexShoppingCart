<template>
  <div id="app">
    <ProductList/>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

export default {
  name: 'app',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

#app {
  font-family: sans-serif;
  display: grid;
  grid-template-areas: "product cart";
  height: 100%;
}

@media screen and (max-width: 47em){
  #app {
    grid-template-areas: "product"
                         "cart"
  };
}
</style>
