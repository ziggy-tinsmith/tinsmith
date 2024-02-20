<template>
  <v-app-bar app clipped-left dense class="ma-0 pa-0">
    <v-app-bar-nav-icon @click.stop="$emit('input', !value)">
    </v-app-bar-nav-icon>
    <v-toolbar-title>
      <b>Tinsmith - {{ lookup($route.name) }}</b>
    </v-toolbar-title>
    <v-spacer />
    <v-select v-model="$vuetify.lang.current" :items="languages" width="50px">
    </v-select>
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

  data: () => ({
    languages: [
      { text: "🇬🇧 - English", value: "en" },
      { text: "🇩🇪 - Deutsch", value: "de" },
      { text: "🇳🇱 - Nederlands", value: "nl" },
      { text: "🇭🇷 - Hrvatski", value: "hr" },
    ],
  }),

  methods: {
    lookup(name: string) {
      if (name === null || !name.startsWith("Feature")) {
        return name;
      }
      return this.$vuetify.lang.t(`$vuetify.${name}`);
    },
  },
});
</script>
