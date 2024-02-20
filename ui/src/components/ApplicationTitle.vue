<template>
  <v-app-bar app clipped-left dense class="ma-0 pa-0">
    <v-app-bar-nav-icon
      @click.stop="$emit('input', !value)"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>
      <b>Tinsmith - {{ $route.name }}</b>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ApplicationTitle",

  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
