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
  feature14: Function;
}

export default Vue.extend({
  name: "ViewFeature14",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "Z", "T"],
    parametersLabels: { K: "⤓⌀ KD", G: "⤒⌀ GD", L: "⍐ L", Z: "⬒ E", T: "⧻ T" },
    resultsKeys: ["SC", "BC", "R2", "R1", "L1", "L2", "Area"],
    resultsLabels: { SC: "⤓∡", BC: "⤒∡", R2: "⦙ R 2", R1: "⦙ R 1", L1: "⦙ L 1", L2: "⦙ L 2", Area: "▨" },
    resultsDigits: { SC: 1, BC: 1, R2: 0, R1: 0, L1: 0, L2: 0, Area: 2 },
    coreFunction: ((window as unknown) as Core).feature14,
    blueprintName: "feature14",
  }),
});
</script>
