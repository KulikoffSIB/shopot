<template>
    <div>
        <store></store>
        <image-uploader></image-uploader>
    </div>

</template>

<script>

    import Store from "./components/Store";
    import ImageUploader from "./components/image-uploader";

    export default {
        name: 'app',
        components: {ImageUploader, Store},
    }
</script>

<style>

</style>
