<template>
  <v-app>
    <ApplicationMenu v-model="drawer" />
    <ApplicationTitle v-model="drawer" />
    <ApplicationView />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ApplicationMenu from "@/components/ApplicationMenu.vue";
import ApplicationTitle from "@/components/ApplicationTitle.vue";
import ApplicationView from "@/components/ApplicationView.vue";

export default Vue.extend({
  name: "Application",

  components: {
    ApplicationMenu,
    ApplicationTitle,
    ApplicationView,
  },

  data: () => ({
    drawer: true,
  }),
});
</script>
