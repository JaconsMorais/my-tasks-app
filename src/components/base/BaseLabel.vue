<template>
  <v-container :tag="as" :class="{
    [transform]: transform,
    [decoration]: decoration,
    [alignment]: alignment,
    [fontWeight]: fontWeight,
    [fontStyle]: fontStyle,
  }" :style="{
    color, 'font-size': fontSize, margin
  }">
    <slot></slot>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseLabel",
  props: {
    transform: String,
    decoration: String,
    alignment: String,
    fontWeight: String,
    color: String,
    fontStyle: String,
    as: String,
    fontSize: Number,
    margin: String
  },
});
</script>