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
  feature56: Function;
}

export default Vue.extend({
  name: "ViewFeature56",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "A", "E", "T"],
    parametersLabels: { K: "⤓⌀ KD", G: "⤒⌀ GD", L: "⟷ L", A: "⟷ A", E: "⬒ E", T: "⧻ T" },
    resultsKeys: ["SR", "BR", "KS", "GS", "PointsL"],
    resultsLabels: { SR: "⤓ R", BR: "⤒ R", KS: "⤓∡ S", GS: "⤒∡ S", PointsL: "⦙ L" },
    resultsDigits: { SR: 0, BR: 0, KS: 1, GS: 1, PointsL: 0 },
    coreFunction: ((window as unknown) as Core).feature56,
    blueprintName: "feature56",
  }),
});
</script>
