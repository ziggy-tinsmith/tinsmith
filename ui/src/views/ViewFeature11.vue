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
  feature11: Function;
}

export default Vue.extend({
  name: "ViewFeature11",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "S", "E", "T", "ET"],
    parametersLabels: { K: "K", G: "G", L: "L", S: "S", E: "E", T: "T", ET: "ET" },
    resultsKeys: ["KR", "GR", "KC", "GC", "OKR", "OGR", "ZMKS", "ZMGS", "WLL", "D", "Area"],
    resultsLabels: { KR: "KR", GR: "GR", KC: "KC", GC: "GC", OKR: "OKR", OGR: "OGR", ZMKS: "ZMKS", ZMGS: "ZMGS", WLL: "WLL", D: "D", Area: "Area" },
    resultsDigits: { KR: 0, GR: 0, KC: 0, GC: 0, OKR: 0, OGR: 0, ZMKS: 1, ZMGS: 1, WLL: 1, D: 1, Area: 2 },
    coreFunction: ((window as unknown) as Core).feature11,
    blueprintName: "feature11",
  }),
});
</script>
