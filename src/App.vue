<template>
  <v-app>
    <router-view name="navbar"></router-view>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
