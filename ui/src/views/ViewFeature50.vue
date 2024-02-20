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
  feature50: Function;
}

export default Vue.extend({
  name: "ViewFeature50",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "H", "S", "A", "E", "T"],
    parametersLabels: { K: "K", G: "G", H: "H", S: "S", A: "A", E: "E", T: "T" },
    resultsKeys: ["SR", "BR", "KS", "GS", "D", "PointsR1", "PointsR2", "PointsR3", "PointsR4", "PointsR5", "PointsR6"],
    resultsLabels: { SR: "SR", BR: "BR", KS: "KS", GS: "GS", D: "D", PointsR1: "PointsR1", PointsR2: "PointsR2", PointsR3: "PointsR3", PointsR4: "PointsR4", PointsR5: "PointsR5", PointsR6: "PointsR6" },
    resultsDigits: { SR: 0, BR: 0, KS: 1, GS: 1, D: 0, PointsR1: 0, PointsR2: 0, PointsR3: 0, PointsR4: 0, PointsR5: 0, PointsR6: 0 },
    coreFunction: ((window as unknown) as Core).feature50,
    blueprintName: "feature50",
  }),
});
</script>
