<template>
  <v-card
    elevation="8"
    v-bind="{
      loading,
      'max-height': maxHeight,
      'max-width': maxWidth,
      'min-height': minHeight,
      'min-width': minWidth,
    }"
    :style="{
      margin,
      padding,
    }"
  >
    <v-card-title>
      <slot name="header"></slot>
    </v-card-title>
    <v-divider v-if="$slots.header"></v-divider>
    <v-card-text><slot></slot></v-card-text>
    <v-divider v-if="$slots.footer"></v-divider>
    <v-card-actions>
      <slot name="footer"></slot>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BaseCard",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: String,
      default: "auto",
    },
    maxWidth: {
      type: String,
      default: "auto",
    },
    minHeight: {
      type: String,
      default: "auto",
    },
    minWidth: {
      type: String,
      default: "auto",
    },
    margin: {
      type: String,
      default: "auto",
    },
    padding: {
      type: String,
      default: "8px",
    },
  },
});
</script>