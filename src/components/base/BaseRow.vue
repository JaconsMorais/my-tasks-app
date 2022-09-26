<template>
  <v-row
    :style="{
      height,
      margin,
    }"
    v-bind="{ align, justify }"
  >
    <slot></slot
  ></v-row>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BaseRow",
  props: {
    align: {
      type: String,
      default: "center",
    },
    justify: {
      type: String,
      default: "center",
    },
    height: {
      type: String,
      default: "auto",
    },
    margin: {
      type: String,
      default: undefined,
    },
  },
});
</script>