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
  feature27: Function;
}

export default Vue.extend({
  name: "ViewFeature27",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "V", "Z", "T"],
    parametersLabels: { K: "⤓⌀ KD", G: "⤒⌀ GD", L: "⍐ L", V: "⟷ V", Z: "⬒ E", T: "⧻ T" },
    resultsKeys: ["KS", "GS", "R1", "R2", "L1", "L2"],
    resultsLabels: { KS: "⤓∡ K S", GS: "⤒∡ G S", R1: "⦙ R 1", R2: "⦙ R 2", L1: "⦙ L 1", L2: "⦙ L 2" },
    resultsDigits: { KS: 1, GS: 1, R1: 0, R2: 0, L1: 0, L2: 0 },
    coreFunction: ((window as unknown) as Core).feature27,
    blueprintName: "feature27",
  }),
});
</script>
