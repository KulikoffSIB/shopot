<template>
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
        Root Component
        <child/>
    </div>
</template>

<script>
    import Child from "./child";
    export default {
        name: "ShoppingCart",
        components: {Child}
    }
</script>

<style scoped>

</style>