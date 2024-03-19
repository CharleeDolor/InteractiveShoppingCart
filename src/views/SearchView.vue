<template>
  <div class="search">
    <h1>Suggested Items for:</h1>
    <div class="search-bar">
      <input type="text" ref="txtSearch" id="txtSearch"> <button @click="searchItem()">SEARCH</button>
    </div>

  </div>

  

  <div class="item-page">
    <table class="item-table">

      <tbody v-for="(item, index) in items" v-bind:key="index">
        <tr>
          <ShopItem :item=item></ShopItem>
          <td>
            <!-- <button @click="addToCart(item)">Add to Cart</button> -->
            <ActionButton prod="Add To Cart" :item=item></ActionButton>
          </td>
        </tr>
      </tbody>

    </table>
  </div>

</template>

<script>

// @ is an alias to /src
import ShopItem from '@/components/ShopItem.vue';
import ActionButton from '@/components/ActionButton.vue';

export default {
  components: {
    ShopItem,
    ActionButton
  },
  data() {
    return {
      items: [],
    }
  },

  beforeMount(){
    this.items = this.$searchItems;
  },

  methods: {
    searchItem() {
      this.items = this.$searchItems.filter(item => item.name.toLowerCase().match(this.$refs.txtSearch.value.toLowerCase()));

      document.getElementById('txtSearch').value = null;
    },
  }
}
</script>

<style scoped>

input{
  font-size: 2rem;
}
th>h2 {
  margin: 0;
}

.search-bar,
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.item-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
