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
  feature08b: Function;
}

export default Vue.extend({
  name: "ViewFeature08B",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "I", "T"],
    parametersLabels: { D: "⌀ D", I: "⟷⧚ I", T: "⧻ T" },
    resultsKeys: ["R2", "R1", "B", "C"],
    resultsLabels: { R2: "⎋ R2", R1: "⎋ R1", B: "B", C: "C" },
    resultsDigits: { R2: 0, R1: 0, B: 0, C: 0 },
    coreFunction: ((window as unknown) as Core).feature08b,
    blueprintName: "feature08",
  }),
});
</script>
