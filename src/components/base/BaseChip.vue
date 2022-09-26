<template>
    <v-chip v-bind="{label, color, textColor}">
        <slot></slot>
    </v-chip>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "BaseChip",
    props: {
        label: Boolean,
        color: {
            type: String,
            default: "primary"
        },
        textColor: {
            type: String,
            default: "black"
        }
    }
})
</script>