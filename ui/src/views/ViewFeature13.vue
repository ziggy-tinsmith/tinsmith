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
  feature13: Function;
}

export default Vue.extend({
  name: "ViewFeature13",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "Z", "S", "E"],
    parametersLabels: { K: "K", G: "G", L: "L", Z: "Z", S: "S", E: "E" },
    resultsKeys: ["L", "FK", "FG", "T", "D", "R", "RK", "RG", "CK", "CG"],
    resultsLabels: { L: "L", FK: "FK", FG: "FG", T: "T", D: "D", R: "R", RK: "RK", RG: "RG", CK: "CK", CG: "CG" },
    resultsDigits: { L: 2, FK: 2, FG: 2, T: 2, D: 2, R: 2, RK: 2, RG: 2, CK: 2, CG: 2 },
    coreFunction: ((window as unknown) as Core).feature13,
    blueprintName: "feature13",
  }),
});
</script>
