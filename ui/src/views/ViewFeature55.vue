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
  feature55: Function;
}

export default Vue.extend({
  name: "ViewFeature55",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "A", "E", "T"],
    parametersLabels: { K: "⤓⌀ KD", G: "⤒⌀ GD", L: "⟷ L", A: "⟷ A", E: "⬒ E", T: "⧻ T" },
    resultsKeys: ["KR", "GR", "KC", "GC", "ZMKS", "ZMGS", "PointsR", "F", "PointsB", "PointsH"],
    resultsLabels: { KR: "⤓ R", GR: "⤒ R", KC: "⤓ C", GC: "⤒ C", ZMKS: "⤓∡ K S", ZMGS: "⤓∡ G S", PointsR: "⦙ R", F: "F", PointsB: "⦙ B", PointsH: "⦙ H" },
    resultsDigits: { KR: 0, GR: 0, KC: 0, GC: 0, ZMKS: 1, ZMGS: 1, PointsR: 0, F: 0, PointsB: 0, PointsH: 0 },
    coreFunction: ((window as unknown) as Core).feature55,
    blueprintName: "feature55",
  }),
});
</script>
