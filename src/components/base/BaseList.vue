<template>
  <v-list><slot></slot></v-list>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseList",
});
</script>