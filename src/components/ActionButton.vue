<template>
    <button id="btnAction" @click="actionBind(
        this.prod,
        this.item,
        this.index,
        this.list
    )">{{ this.prod }}</button>
</template>

<script>
export default {

    props: {
        prod: {
            required: true,
            type: String
        },

        item: {
            required: true,
            type: Object
        },

        index: {
            type: Number
        },

        list: {
            type: Array
        }

    },
    methods: {
        actionBind(
            val, 
            item = { name: "", price: "" }, 
            index = 0, 
            items = null
        ) {
            if (val === "Update Quantity") {

                let item = items[index];
                let newQuantity = parseInt(prompt('Edit the quantity:', item.quantity));

                if (!isNaN(newQuantity)) {
                    item.quantity = newQuantity;
                } else {
                    alert("Invalid quantity");
                    return;
                }

                alert("Successfully updated");
            }

            if (val === "Remove") {
                
                let willDelete = confirm("Deleting " + item.name);
                if(willDelete){
                    items.splice(index, 1);
                    alert(item.name + " successfully removed.");
                } else {
                    alert("Delete cancelled");
                }
                
            }

            if (val === "Add To Cart") {
                let qty = parseInt(prompt("Enter Quantity for " + item.name + ": "));

                if (!isNaN(qty)) {
                    let isExist = false;
                    this.$addedToCart.forEach(each => {
                        if (each.name === item.name) {
                            each.quantity += qty;
                            isExist = true;
                        }
                    });

                    if (!isExist) {
                        this.$addedToCart.push({ name: item.name, price: item.price, quantity: qty });
                    }

                    alert('Successfully added to cart');
                } else {
                    alert('Invalid quantity');
                }
            }

            if (val === "Update") {
                let previousName = item.name;
                let newName = prompt('Enter the new name:', item.name);
                let newPrice = parseFloat(prompt('Enter the new price:', item.price));

                if (newName && !isNaN(newPrice)) {
                    item.name = newName;
                    item.price = newPrice;
                } else {
                    alert('Update fail');
                    return;
                }

                this.$addedToCart.forEach(each => {
                    if (each.name === previousName) {
                        each.name = newName;
                        each.price = newPrice;
                    }
                });

                alert("Updated sucessfully");
            }
        }
    }
}

</script>