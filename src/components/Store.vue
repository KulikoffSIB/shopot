<template>
    <div class="container-fluid" style="overflow-x: hidden">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORTS STORE</a>
                <router-link to="/cart">cart</router-link> |
                <router-link to="/validation">Vuelidate</router-link>
            </div>
        </div>
        <div class="row" style="min-height: 410px">
            <div class="col-3 bg-info p-2">
                <category-controls></category-controls>
            </div>
            <div class="col-9 p-2">
                <product-list></product-list>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductList from "./ProductList";
    import CategoryControls from "./CategoryControls";
    export default {
        name: "Store",
        components: {CategoryControls, ProductList}
    }
</script>

<style scoped>

</style>