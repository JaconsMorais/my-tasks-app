<template>
    <v-text-field outlined filled :validate-on-blur="!!rules" hide-spin-buttons v-bind="{label, hint, rules, disabled, color, clearable, value, placeholder}" hide-details="auto"
        @input="$emit('input', $event)">
        <slot></slot>
    </v-text-field>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "BaseInput",
    props: {
        label: {
            type: String,
            default: ''
        },
        hint: {
            type: String,
            default: ''
        },
        placeholder:{
            type: String,
            default: ''
        },
        rules: {
            type: Array,
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: undefined
        },
        clearable:{
            type: Boolean,
            default: true
        },
        color:{
            type: String,
            default: "black"
        }
    }
})
</script>
<style scoped>
.v-input{
    margin: 4px;
    padding: 4px 0px;
}
</style>