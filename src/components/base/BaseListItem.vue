<template>
    <v-card :color="color" :style="{ margin }">
        <v-card-title> {{ title }} </v-card-title>

        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

        <v-card-text>
            <slot name="body"></slot>
        </v-card-text>

        <v-card-actions>
            <slot name="footer"></slot>
        </v-card-actions>
    </v-card>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "BaseListItem",
    props: {
        color: {
            type: String,
            default: "white",
        },
        title: String,
        subtitle: String,
        margin: {
            type: String,
            default: "8px 0px",
        },
    },
});
</script>