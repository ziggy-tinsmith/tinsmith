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
  feature29: Function;
}

export default Vue.extend({
  name: "ViewFeature29",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "A", "B", "H", "V", "W", "T"],
    parametersLabels: { D: "D", A: "A", B: "B", H: "H", V: "V", W: "W", T: "T" },
    resultsKeys: ["S", "F1", "PointsA", "F2", "PointsB", "F3", "PointsC", "F4", "PointsD", "Area"],
    resultsLabels: { S: "S", F1: "F1", PointsA: "PointsA", F2: "F2", PointsB: "PointsB", F3: "F3", PointsC: "PointsC", F4: "F4", PointsD: "PointsD", Area: "Area" },
    resultsDigits: { S: 1, F1: 0, PointsA: 0, F2: 0, PointsB: 0, F3: 0, PointsC: 0, F4: 0, PointsD: 0, Area: 2 },
    coreFunction: ((window as unknown) as Core).feature29,
    blueprintName: "feature29",
  }),
});
</script>
