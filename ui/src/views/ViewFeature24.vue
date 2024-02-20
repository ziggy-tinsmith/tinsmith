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
  feature24: Function;
}

export default Vue.extend({
  name: "ViewFeature24",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "G", "A", "T"],
    parametersLabels: { D: "D", G: "G", A: "A", T: "T" },
    resultsKeys: ["S", "L", "P1", "P2"],
    resultsLabels: { S: "S", L: "L", P1: "P1", P2: "P2" },
    resultsDigits: { S: 1, L: 0, P1: 0, P2: 0 },
    coreFunction: ((window as unknown) as Core).feature24,
    blueprintName: "feature24",
  }),
});
</script>
