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
  feature30: Function;
}

export default Vue.extend({
  name: "ViewFeature30",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "A", "B", "K", "G", "V", "T"],
    parametersLabels: { D: "D", A: "A", B: "B", K: "K", G: "G", V: "V", T: "T" },
    resultsKeys: ["S", "F1", "PointsA", "PointsB", "F2", "F3"],
    resultsLabels: { S: "S", F1: "F1", PointsA: "PointsA", PointsB: "PointsB", F2: "F2", F3: "F3" },
    resultsDigits: { S: 1, F1: 0, PointsA: 0, PointsB: 0, F2: 0, F3: 0 },
    coreFunction: ((window as unknown) as Core).feature30,
    blueprintName: "feature30",
  }),
});
</script>
