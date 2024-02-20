<template>
  <v-navigation-drawer
    v-bind:value="value"
    v-on:input="setDrawer"
    app
    clipped
    :mini-variant="true"
  >
    <v-list dense>
      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature01"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>01</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature01") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature01") }}</span>
      </v-tooltip>
    </v-list>
    <template v-slot:append>
      <v-list>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              to="/information"
              active-class="primary--text"
              ripple
              v-bind="attrs"
              v-on="on"
            >
              <v-list-item-action>
                <v-icon>mdi-information-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title>🛈</v-list-item-title>
            </v-list-item>
          </template>
          <span>🛈</span>
        </v-tooltip>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ApplicationMenu",

  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    setDrawer(value: boolean) {
      this.$emit("input", value);
    },

    lookup(name: string) {
      if (name === null || !name.startsWith("Feature")) {
        return name;
      }
      return this.$vuetify.lang.t(`$vuetify.${name}`);
    },
  },
});
</script>
