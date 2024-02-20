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
  feature35: Function;
}

export default Vue.extend({
  name: "ViewFeature35",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "I", "K", "S", "E", "U", "A", "B"],
    parametersLabels: { D: "D", I: "I", K: "K", S: "S", E: "E", U: "U", A: "A", B: "B" },
    resultsKeys: ["SS", "LA", "LB", "ZMSA", "ZMSB", "L", "H", "PointsA", "PointsB", "Area", "VL"],
    resultsLabels: { SS: "SS", LA: "LA", LB: "LB", ZMSA: "ZMSA", ZMSB: "ZMSB", L: "L", H: "H", PointsA: "PointsA", PointsB: "PointsB", Area: "Area", VL: "VL" },
    resultsDigits: { SS: 0, LA: 0, LB: 0, ZMSA: 1, ZMSB: 1, L: 0, H: 0, PointsA: 0, PointsB: 0, Area: 2, VL: 2 },
    coreFunction: ((window as unknown) as Core).feature35,
    blueprintName: "feature35",
  }),
});
</script>
