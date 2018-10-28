<template>
    <tr>
        <td>
            <input type="number" class="form-control-sm"
            style="width: 5em"
            :value="qvalue"
            @input="sendChangeEvent">
        </td>
        <td>{{line.product.name}}</td>
        <td class="text-right">
            {{line.product.price | currency}}
        </td>
        <td class="text-right">
            {{(line.qunatity * line.product.price) | currency}}
        </td>
        <td class="text-center">
            <button class="btn btn-sm btn-danger"
            @click="sendRemoveEvent">
                Remove
            </button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "ShoppingCartLine",
        props: ['line'],
        data: function () {
            return {
                qvalue: this.line.qunatity
            }
        },
        methods: {
            sendChangeEvent(event) {
                if (event.target.value > 0) {
                    this.$emit('quantity', +event.target.value);
                    this.qvalue = event.target.value;
                } else {
                    this.$emit('quantity', 1);
                    this.qvalue = 1;
                    event.target.value = 1;
                }
            },
            sendRemoveEvent() {
                this.$emit('remove', this.line);
            }
        }
    }
</script>

<style scoped>

</style>