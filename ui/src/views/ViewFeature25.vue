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
  feature25: Function;
}

export default Vue.extend({
  name: "ViewFeature25",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "D", "E", "T"],
    parametersLabels: { K: "K", G: "G", L: "L", D: "D", E: "E", T: "T" },
    resultsKeys: ["KS", "GS", "RK", "RG"],
    resultsLabels: { KS: "KS", GS: "GS", RK: "RK", RG: "RG" },
    resultsDigits: { KS: 1, GS: 1, RK: 0, RG: 0 },
    coreFunction: ((window as unknown) as Core).feature25,
    blueprintName: "feature25",
  }),
});
</script>
