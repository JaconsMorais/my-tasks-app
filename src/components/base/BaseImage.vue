<template>
  <v-img
    v-bind="{
      src,
      srcset,
      width,
      alt,
      'max-height': maxHeight,
      'max-width': maxWidth,
      'min-height': minHeight,
      'min-width': minWidth,
    }"
    :style="{ margin }"
    ><slot></slot
  ></v-img>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BaseImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
    },
    width: {
      type: String,
    },
    alt: {
      type: String,
      required: true,
    },
    margin: String,
    maxHeight: String,
    maxWidth: String,
    minHeight: String,
    minWidth: String,
  },
});
</script>