<template>
    <div>
        <router-view></router-view>
        <!--<image-uploader></image-uploader>-->
    </div>

</template>

<script>
    import {mapActions} from 'vuex';
    import Store from "./components/Store";

    export default {
        name: 'app',
        components: {Store},
        methods: {
            ...mapActions(['getData'])
        },
        async created() {
            this.$store.commit('test', 'works');
            this.$store.dispatch('getData');
        }
    }
</script>

<style>

</style>
