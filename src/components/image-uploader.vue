<template>
    <div>
        <div>
            <input type="file" ref="image">
            <button @click="checkFile">check</button>
            <button @click="uploadFile">upload</button>
            <button @click="getImage">download</button>
        </div>
        <div>
            <img src="" alt="" ref="schemeImage">
        </div>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "image-uploader",
        methods: {
            checkFile() {
                let file = this.$refs.image.files[0];
                console.log(file)
            },
            uploadFile() {
                let formData = new FormData();

                formData.append('file', this.$refs.image.files[0]);

                axios.post('http://193.124.57.34:8080/rest/file/upload', formData, {headers: {'Content-Type': 'multipart/form-data'}})
                    .then(res => console.log(res.data));

            },
            getImage() {
                axios({
                    method: 'get',
                    url: 'http://193.124.57.34:8080/rest/files/download',
                    params: {
                        name: 'name'
                    }
                }).then(res => {
                    this.$refs.schemeImage.src = res.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>