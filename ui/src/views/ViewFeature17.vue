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
  feature17: Function;
}

export default Vue.extend({
  name: "ViewFeature17",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "A", "G", "V", "T"],
    parametersLabels: { D: "⌀| D", A: "∠ A", G: "⌀∥ D", V: "⟷ V", T: "⧻ T" },
    resultsKeys: ["S", "L", "Points", "B", "H"],
    resultsLabels: { S: "∡ S", L: "◯ L", Points: "⦙", B: "◜ B", H: "◜ H" },
    resultsDigits: { S: 1, L: 0, Points: 0, B: 0, H: 0 },
    coreFunction: ((window as unknown) as Core).feature17,
    blueprintName: "feature17",
  }),
});
</script>
