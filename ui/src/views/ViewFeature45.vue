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
  feature45: Function;
}

export default Vue.extend({
  name: "ViewFeature45",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "V", "T"],
    parametersLabels: { K: "K", G: "G", L: "L", V: "V", T: "T" },
    resultsKeys: ["KR", "GR", "ZMKS", "ZMGS", "PointsR2", "PointsR1", "PointsRA", "SA", "LA", "PointsA", "SC", "LC", "Points"],
    resultsLabels: { KR: "KR", GR: "GR", ZMKS: "ZMKS", ZMGS: "ZMGS", PointsR2: "PointsR2", PointsR1: "PointsR1", PointsRA: "PointsRA", SA: "SA", LA: "LA", PointsA: "PointsA", SC: "SC", LC: "LC", Points: "Points" },
    resultsDigits: { KR: 0, GR: 0, ZMKS: 1, ZMGS: 1, PointsR2: 0, PointsR1: 0, PointsRA: 0, SA: 1, LA: 0, PointsA: 0, SC: 1, LC: 0, Points: 0 },
    coreFunction: ((window as unknown) as Core).feature45,
    blueprintName: "feature45",
  }),
});
</script>
