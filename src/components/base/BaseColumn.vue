<template>
  <v-col v-bind="{ 'align-self': alignSelf, lg, md, sm, xl }">
    <slot></slot>
  </v-col>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BaseColumn",
  props: {
    alignSelf: {
      type: String,
      default: "center",
    },
    lg: {
      type: Number,
      default: 12,
    },
    md: {
      type: Number,
      default: 12,
    },
    sm: {
      type: Number,
      default: 12,
    },
    xl: {
      type: Number,
      default: 12,
    },
  },
});
</script>