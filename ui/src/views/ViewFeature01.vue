<template>
  <Feature
    :parametersKeys="parametersKeys"
    :parametersLabels="parametersLabels"
    :resultsKeys="resultsKeys"
    :resultsLabels="resultsLabels"
    :resultsDigits="resultsDigits"
    :coreFunction="coreFunction"
    :blueprintName="blueprintName"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Feature from "@/components/Feature.vue";

interface Core {
  feature01: Function;
}

export default Vue.extend({
  name: "ViewFeature01",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "R", "S", "E", "T"],
    parametersLabels: { D: "⌀ D", R: "⎋ R", S: "┇ S", E: "⬒ E", T: "⧻ T" },
    resultsKeys: ["S", "L", "Points", "Area"],
    resultsLabels: { S: "∡ S", L: "◯ L", Points: "⦙", Area: "▨" },
    resultsDigits: { S: 1, L: 0, Points: 0, Area: 2 },
    coreFunction: ((window as unknown) as Core).feature01,
    blueprintName: "feature01",
  }),
});
</script>
