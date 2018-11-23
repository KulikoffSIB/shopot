<template>
    <div class="mx-5 p-2 border border-dark">
        <h3 class="bg-info text-white text-center p-2">My List</h3>
        <table class="table table-sm">
            <tr>
                <th>#</th>
                <th>Item</th>
                <th width="20%" colspan="2"></th>
            </tr>
            <tr v-for="(item, i) in items" v-bind:key=item>
                <td>{{i}}</td>
                <td>{{item}}</td>
                <td>
                    <button class="btn btn-sm btn-info" v-on:click="moveItem(i)">
                        Move
                    </button>
                    <button class="btn btn-sm btn-danger" v-on:click="removeItem(i)">
                        Delete
                    </button>
                </td>
            </tr>
            <controls v-on:add="addItem"/>
        </table>
    </div>
</template>

<script>
    import Controls from "./list-maker-control";

    export default {
        components: { Controls },
        data: function () {
            return {
                items: ["Apples", "Oranges", "Grapes"]
            }
        },
        methods: {
            addItem(item) {
                this.items.push(item);
            },
            removeItem(index) {
                this.items.splice(index, 1);
            },
            moveItem(index) {
                this.items.push(...this.items.splice(index, 1));
            }
        }
    }
</script>

<style scoped>

</style>