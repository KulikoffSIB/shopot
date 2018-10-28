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
            }
        }
    }
</script>

<style scoped>

</style>