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
  feature51: Function;
}

export default Vue.extend({
  name: "ViewFeature51",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "D", "E", "T"],
    parametersLabels: { K: "⤓⌀ KD", G: "⤒⌀ GD", L: "⍐ H", D: "⌀∥ D", E: "⬒ E", T: "⧻ T" },
    resultsKeys: ["SR", "BR", "KS", "GS", "PointsL", "H", "B"],
    resultsLabels: { SR: "⤓ R", BR: "⤒ R", KS: "⤓∡ S", GS: "⤒∡ S", PointsL: "⦙ L", H: "H", B: "B" },
    resultsDigits: { SR: 0, BR: 0, KS: 1, GS: 1, PointsL: 0, H: 0, B: 0 },
    coreFunction: ((window as unknown) as Core).feature51,
    blueprintName: "feature51",
  }),
});
</script>
