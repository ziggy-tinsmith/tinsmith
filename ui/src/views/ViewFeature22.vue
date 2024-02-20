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
  feature22: Function;
}

export default Vue.extend({
  name: "ViewFeature22",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "A", "K", "G", "L", "J", "V", "T"],
    parametersLabels: { D: "⌀| D", A: "∠ A", K: "⤓⌀ KD", G: "⤒⌀ GD", L: "⍐ L", J: "⟷ J", V: "⟷ V", T: "⧻ T" },
    resultsKeys: ["S", "L", "Points"],
    resultsLabels: { S: "∡ S", L: "◯ L", Points: "⦙" },
    resultsDigits: { S: 1, L: 0, Points: 0 },
    coreFunction: ((window as unknown) as Core).feature22,
    blueprintName: "feature22",
  }),
});
</script>
