<template>
    <div class="container-fluid">
        <h2 class="bg-primary text-white text-center p-3">Products</h2>
        <table class="table table-sm table-bordered text-left">
            <tr>
                <th style="width: 50%">Name</th>
                <th>Price</th>
            </tr>
            <tbody>
            <!-- eslint-disable-next-line vue/require-v-for-key -->
            <tr v-for="p in pageItems">
                <td>{{p.id}}: {{ p.name }}</td>
                <td>{{ p. price}}</td>
            </tr>
            </tbody>
        </table>
        <div class="text-center">
            <!-- eslint-disable-next-line vue/require-v-for-key -->
            <button v-for="i in pageCount" v-on:click="selectPage(i)"
                    class="btn btn-secondary m-1"
                    v-bind:class="{'bg-primary': currentPage === i}">
                {{ i }}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShoppingCart",
        data: function () {
            return {
                pageSize: 3,
                currentPage: 1,
                products: [
                    {name: "Kayak", price: 275},
                    {name: "Thinking Cap", price: 16},
                    {name: "Lifejacket", price: 48.95},
                    {name: "Stadium", price: 79500},
                    {name: "Soccer Ball", price: 19.50},
                    {name: "Human Chess Board", price: 75},
                    {name: "Corner Flags", price: 39.95},
                    {name: "Stadium", price: 79500},
                    {name: "Lifejacket", price: 48.95},
                    {name: "Stadium", price: 79500},
                    {name: "Soccer Ball", price: 19.50},
                    {name: "Soccer Ball", price: 19.50},
                    {name: "Human Chess Board", price: 75},
                    {name: "Corner Flags", price: 39.95},
                    {name: "Stadium", price: 79500},
                    {name: "Lifejacket", price: 48.95},
                    {name: "Stadium", price: 79500},
                    {name: "Soccer Ball", price: 19.50},
                    {name: "Human Chess Board", price: 75},
                    {name: "Stadium", price: 79500},
                    {name: "Corner Flags", price: 39.95},
                    {name: "Stadium", price: 79500},
                    {name: "Thinking Cap", price: 16},
                    {name: "Unsteady Chair", price: 29.95},
                    {name: "Soccer Ball", price: 19.50},
                    {name: "Human Chess Board", price: 75},
                    {name: "Corner Flags", price: 39.95},
                    {name: "Stadium", price: 79500},
                    {name: "Thinking Cap", price: 16},
                    {name: "Unsteady Chair", price: 29.95},
                    {name: "Soccer Ball", price: 19.50},
                    {name: "Kayak", price: 275},
                    {name: "Human Chess Board", price: 75},
                    {name: "Bling Bling King", price: 1200}
                ]
            }
        },
        computed: {
            pageCount() {
                return Math.ceil(this.products.length / this.pageSize);
            },
            pageItems() {
                let start = (this.currentPage - 1) * this.pageSize;
                return this.products.slice((this.currentPage - 1) * this.pageSize, start + this.pageSize)
            }
        },
        methods: {
            selectPage(page) {
                this.currentPage = page;
            }
        },
        created() {
            let counter = 1;

            this.products.forEach(p => p.id = counter++)
        }
    }
</script>

<style scoped>

</style>