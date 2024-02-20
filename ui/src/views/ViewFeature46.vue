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
  feature46: Function;
}

export default Vue.extend({
  name: "ViewFeature46",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "V", "T"],
    parametersLabels: { K: "⤓⌀ KD", G: "⤒⌀ GD", L: "⍐ L", V: "⟷ V", T: "⧻ T" },
    resultsKeys: ["ZMKS", "ZMGS", "L1", "L2", "M1", "M2"],
    resultsLabels: { ZMKS: "⤓∡ K S", ZMGS: "⤒∡ G S", L1: "L 1", L2: "L 2", M1: "M 1", M2: "M 2" },
    resultsDigits: { ZMKS: 1, ZMGS: 0, L1: 0, L2: 0, M1: 0, M2: 0 },
    coreFunction: ((window as unknown) as Core).feature46,
    blueprintName: "feature46",
  }),
});
</script>
