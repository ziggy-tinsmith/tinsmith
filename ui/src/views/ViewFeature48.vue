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
  feature48: Function;
}

export default Vue.extend({
  name: "ViewFeature48",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "A", "B", "L", "V", "T"],
    parametersLabels: { D: "D", A: "A", B: "B", L: "L", V: "V", T: "T" },
    resultsKeys: ["S", "F1", "PointsA", "PointsB", "F2", "PointsM"],
    resultsLabels: { S: "S", F1: "F1", PointsA: "PointsA", PointsB: "PointsB", F2: "F2", PointsM: "PointsM" },
    resultsDigits: { S: 1, F1: 0, PointsA: 0, PointsB: 0, F2: 0, PointsM: 0 },
    coreFunction: ((window as unknown) as Core).feature48,
    blueprintName: "feature48",
  }),
});
</script>
