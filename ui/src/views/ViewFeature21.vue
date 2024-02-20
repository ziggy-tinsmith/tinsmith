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
  feature21: Function;
}

export default Vue.extend({
  name: "ViewFeature21",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "K", "G", "L", "A", "V", "T"],
    parametersLabels: { D: "⌀| D", K: "⤓⌀ KD", G: "⤒⌀ GD", L: "⍐ L", A: "⟷ A", V: "⟷ V", T: "⧻ T" },
    resultsKeys: ["S", "L", "Points", "B", "MH", "PH"],
    resultsLabels: { S: "∡ S", L: "◯ L", Points: "⦙", B: "◜ B", MH: "◜ -H", PH: "◜ +H" },
    resultsDigits: { S: 1, L: 0, Points: 0, B: 0, MH: 0, PH: 0 },
    coreFunction: ((window as unknown) as Core).feature21,
    blueprintName: "feature21",
  }),
});
</script>
