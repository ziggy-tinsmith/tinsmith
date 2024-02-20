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
  feature11: Function;
}

export default Vue.extend({
  name: "ViewFeature11",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "L", "S", "E", "T", "ET"],
    parametersLabels: { K: "⤓⌀ KD", G: "⤒⌀ GD", L: "⍐ H", S: "R", E: "⬒ E", T: "⧻ T", ET: "⧻ ET" },
    resultsKeys: ["KR", "GR", "KC", "GC", "OKR", "OGR", "ZMKS", "ZMGS", "WLL", "D", "Area"],
    resultsLabels: { KR: "K R", GR: "G R", KC: "K C", GC: "G C", OKR: "K R'", OGR: "G R'", ZMKS: "⤓∡ S", ZMGS: "⤒∡ S", WLL: "W.L. L.", D: "⌀ D", Area: "▨" },
    resultsDigits: { KR: 0, GR: 0, KC: 0, GC: 0, OKR: 0, OGR: 0, ZMKS: 1, ZMGS: 1, WLL: 1, D: 1, Area: 2 },
    coreFunction: ((window as unknown) as Core).feature11,
    blueprintName: "feature11",
  }),
});
</script>
