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
  feature32: Function;
}

export default Vue.extend({
  name: "ViewFeature32",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["A", "B", "H", "I", "C", "D", "S"],
    parametersLabels: { A: "A", B: "B", H: "H", I: "I", C: "C", D: "D", S: "S" },
    resultsKeys: ["AA", "BA", "LA", "HA", "AB", "BB", "LB", "HB", "Area"],
    resultsLabels: { AA: "AA", BA: "BA", LA: "LA", HA: "HA", AB: "AB", BB: "BB", LB: "LB", HB: "HB", Area: "Area" },
    resultsDigits: { AA: 0, BA: 0, LA: 0, HA: 0, AB: 0, BB: 0, LB: 0, HB: 0, Area: 2 },
    coreFunction: ((window as unknown) as Core).feature32,
    blueprintName: "feature32",
  }),
});
</script>
