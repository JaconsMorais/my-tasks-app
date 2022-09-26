<template>
  <v-btn
    depressed
    @click="handleOnClick"
    v-bind="{
      loading: loading || isLoading,
      icon: iconOnly,
      color,
      type,
      plain,
      fab,
      bottom,
      left,
      top,
      right,
    }"
    :style="{
      margin,
    }"
  >
    <v-icon v-if="icon" dark>{{ icon }}</v-icon>
    {{ text }}
    <slot></slot>
  </v-btn>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseButton",
  data() {
    return {
      isLoading: false,
    };
  },
  props: {
    onClick: {
      type: Function,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
    },
    plain: Boolean,
    fab: Boolean,
    bottom: Boolean,
    left: Boolean,
    top: Boolean,
    right: Boolean,
    margin: String,
    type: String,
  },
  methods: {
    setLoading(loading) {
      this.isLoading = loading;
    },
    async handleOnClick() {
      if (this.onClick) {
        this.setLoading(true);

        try {
          await this.onClick();
        } finally {
          this.setLoading(false);
        }
      }
    },
  },
});
</script>