<template>
    <div class="manage-items">
        <h1>Manage Items</h1>

        <div class="item-page">
            <table class="item-table">

                <tbody v-for="(item, index) in items" v-bind:key="index">
                    <tr>
                        <ShopItem :item=item></ShopItem>
                        <td>
                            <ActionButton prod="Update" :item=item></ActionButton>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>

    </div>

</template>

<script>
// @ is an alias to /src
import ShopItem from '@/components/ShopItem.vue';
import ActionButton from '@/components/ActionButton.vue';

export default {
    name: 'ManageItems',

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
        this.items = this.$searchItems;
    },
}
</script>

<style scoped>
.item-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>