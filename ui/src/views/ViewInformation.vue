<template>
  <v-main>
    <v-sheet class="pa-4" fill-height>
      <h2>Information</h2>
      <p>
        <span style="font-weight: bold">Tinsmith</span>
        <br />
        <span>Version {{ version }}</span>
        <br />
        <span>© 2020, altermarkive. All rights reserved.</span>
        <br />
        <a
          href="https://altermarkive.github.io/tinsmith"
          target="_blank"
          rel="noopener noreferrer"
          >https://altermarkive.github.io/tinsmith</a
        >
        <br />
      </p>
      <h2>Attributions</h2>
      <p>
        Icon made by
        <a href="https://www.flaticon.com/authors/tomas-knop" title="Tomas Knop"
          >Tomas Knop</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </p>
    </v-sheet>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ViewInformation",

  computed: {
    version() {
      return process.env.VUE_APP_VERSION;
    },
  },
});
</script>
