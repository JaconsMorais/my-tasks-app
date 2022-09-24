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
  >
    <slot></slot
  ></v-card>
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
  },
});
</script>
<style scoped>
.v-card {
  margin: 16px;
  padding: 8px;
}
</style>