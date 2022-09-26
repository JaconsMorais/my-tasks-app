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
      default: undefined,
    },
    md: {
      type: Number,
      default: undefined,
    },
    sm: {
      type: Number,
      default: undefined,
    },
    xl: {
      type: Number,
      default: undefined,
    },
  },
});
</script>