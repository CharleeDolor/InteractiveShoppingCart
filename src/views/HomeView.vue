<template>
  <div class="home">
    <ShoppingCart/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: 'HomeView',
  components: {
    ShoppingCart
  }
}
</script>
