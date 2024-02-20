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
            to="/welcome"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action> ! </v-list-item-action>
            <v-list-item-title>!</v-list-item-title>
          </v-list-item>
        </template>
        <span>Welcome</span>
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
              <v-list-item-title>Information</v-list-item-title>
            </v-list-item>
          </template>
          <span>Information</span>
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
  },
});
</script>
