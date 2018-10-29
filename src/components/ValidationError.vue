<template>
    <div v-if="show">
        <div v-for="m in messages" :key="m" style="color: crimson">
            {{m}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ValidationError",
        props: ['validation'],
        computed: {
            show() {
                return this.validation.$dirty && this.validation.$invalid
            },
            messages() {
                let messages = [];

                if (this.validation.$dirty) {
                    if (this.hasValidationError('required')) {
                        messages.push('Please enter word')
                    }
                    if (this.hasValidationError('customValidator')) {
                        messages.push('Please enter a \"works\" word')
                    }
                }

                return messages;
            }
        },
        methods: {
            hasValidationError(type) {
                return this.validation.$params.hasOwnProperty(type) && !this.validation[type];
            }
        }
    }
</script>

<style scoped>

</style>