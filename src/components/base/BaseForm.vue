<template>
  <v-form
    v-bind="{ disabled, readonly }"
    lazy-validation
    @submit="onSubmit"
    @input="onInput"
  >
    <v-col alignment="center" align-self="center">
      <slot></slot>
    </v-col>
  </v-form>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseForm",
  props: {
    disabled: Boolean,
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onSubmit(v) {
      this.$emit("onSubmit", v);
    },
    onInput(v) {
      this.$emit("onInput", v);
    },
  },
});
</script>