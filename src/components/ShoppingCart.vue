<template>
  <h1>Cart Items:</h1>
  <div class="item-page">
    <table class="item-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody v-for="(item, index) in this.$addedToCart" v-bind:key="index">
        <tr>
          <ShopItem :item=item></ShopItem>
          <td>{{ item.quantity }}</td>

          <td class="button-group">
            <ActionButton prod="Update Quantity" :item=item :index=index :list=this.items></ActionButton>
            <ActionButton prod="Remove" :item=item :index=index :list=this.items></ActionButton>
          </td>
        </tr>
      </tbody>

      <div>
        <h3>Total: {{ this.totalPrice }}</h3>
      </div>


    </table>

  </div>
</template>

<script>
// @ is an alias to /src
import ShopItem from '@/components/ShopItem.vue';
import ActionButton from '@/components/ActionButton.vue';

export default {
  name: 'ShoppingCart',

  components:{
    ShopItem,
    ActionButton
  },
  data() {
    return {
      items: [],
    }
  },

  beforeMount() {
    this.items = this.$addedToCart;
  },

  computed: {
    totalPrice() {
      let total = 0;
      this.items.forEach(item => {
        total += item.price * item.quantity;
      });

      return total;
    },

  },
}
</script>

<style scoped>

.button-group{
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}

button{
    font-size: 20px
}
.item-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>