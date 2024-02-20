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
  feature09b: Function;
}

export default Vue.extend({
  name: "ViewFeature09B",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "A"],
    parametersLabels: { D: "D", A: "A" },
    resultsKeys: ["F", "R", "D", "T", "L", "L1", "L2", "L3"],
    resultsLabels: { F: "F", R: "R", D: "D", T: "T", L: "L", L1: "L1", L2: "L2", L3: "L3" },
    resultsDigits: { F: 0, R: 0, D: 0, T: 0, L: 0, L1: 0, L2: 0, L3: 0 },
    coreFunction: ((window as unknown) as Core).feature09b,
    blueprintName: "feature09",
  }),
});
</script>
