<template>
    <td>{{ item.name }}</td>
    <td>₱{{ item.price }}</td>
</template>

<script>
export default {
    props: {
        item: {
            required: true,
            type: Object
        }
    },
};
</script>