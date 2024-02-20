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
  feature05: Function;
}

export default Vue.extend({
  name: "ViewFeature05",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "R", "S", "A", "E", "T"],
    parametersLabels: { D: "⌀ D", R: "⎋ R", S: "┇ S", A: "∠ A", E: "⬒ E", T: "⧻ T" },
    resultsKeys: ["S", "L", "Points", "T", "Area"],
    resultsLabels: { S: "∡ S", L: "◯ L", Points: "⦙", T: "⟷ T", Area: "▨" },
    resultsDigits: { S: 1, L: 0, Points: 0, T: 0, Area: 2 },
    coreFunction: ((window as unknown) as Core).feature05,
    blueprintName: "feature05",
  }),
});
</script>
