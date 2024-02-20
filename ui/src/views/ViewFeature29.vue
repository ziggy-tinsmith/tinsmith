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
    parametersLabels: { D: "⌀ D", A: "⟷ A", B: "⟷ B", H: "⍐ H", V: "⟷ V", W: "⟷ W", T: "⧻ T" },
    resultsKeys: ["S", "F1", "PointsA", "F2", "PointsB", "F3", "PointsC", "F4", "PointsD", "Area"],
    resultsLabels: { S: "∡ S", F1: "F 1", PointsA: "⦙ P A", F2: "F 2", PointsB: "⦙ P B", F3: "F 3", PointsC: "⦙ C", F4: "F 4", PointsD: "⦙ D", Area: "▨" },
    resultsDigits: { S: 1, F1: 0, PointsA: 0, F2: 0, PointsB: 0, F3: 0, PointsC: 0, F4: 0, PointsD: 0, Area: 2 },
    coreFunction: ((window as unknown) as Core).feature29,
    blueprintName: "feature29",
  }),
});
</script>
