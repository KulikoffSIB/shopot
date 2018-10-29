<template>
    <div>
        <label>
            <input type="text" v-model="$v.name.$model" class="form-control m-2">
        </label>
        <div>
            {{name}}
        </div>
        <div>
            <button class="btn btn-success m-2" @click="validateField">Validate</button>
            <button class="btn btn-success m-2" @click="test">Test</button>
        </div>
        <div>
            <validation-error :validation="$v.name"></validation-error>
        </div>
    </div>
</template>

<script>
    import {required} from 'vuelidate/lib/validators'
    import ValidationError from "./ValidationError";

    function customValidator(value) {
        return value === 'works';
    }

    export default {
        name: "Validation",
        components: {ValidationError},
        data: function () {
            return {
                name: ''
            }
        },
        validations: {
            name: {
                required,
                customValidator
            }
        },
        methods: {
            validateField() {
                this.$v.$touch();
                console.log(!this.$v.$invalid)
            },
            test() {
                let test = [...Array(10).keys()];
                let test2 = (Array.from(Array(11).keys())).slice(1);
                let test3 = ['test', ...[1, 2, 3, 4, 5, 6]];

                console.log(test);
                console.log(test2);
                console.log(test3);
            }
        }
    }
</script>

<style scoped>

</style>