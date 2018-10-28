<template>
    <div class="row mt-2">
        <div class="col form-group">
            <select class="form-control" @change="setPageSize(+$event.target.value)">
                <option value="4">4 per page</option>
                <option value="8">8 per page</option>
                <option value="12">12 per page</option>
            </select>
        </div>
        <div class="text-right col">
            <div class="btn-group mx-2">
                <button v-for="i in pageNumbers" :key="i"
                        :class="['btn', 'btn-secondary', {'btn-primary': i == currentPage}]"
                        @click="setCurrentPage(i)">
                    {{i}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex';

    export default {
        name: "PageControls",
        computed: {
            ...mapState(['currentPage']),
            ...mapGetters(['pageCount']),
            pageNumbers() {
                return [...Array(this.pageCount + 1).keys()].slice(1)
            }
        },
        methods: {
            ...mapMutations(['setCurrentPage', 'setPageSize'])
        }
    }
</script>

<style scoped>

</style>