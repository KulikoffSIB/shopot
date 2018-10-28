<template>
    <div>
        <label>
            <input type="text" v-model="name">
        </label>
        <div>
            {{name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Validation",
        data: function () {
            return {
                name: ''
            }
        }
    }
</script>

<style scoped>

</style>