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
  feature43: Function;
}

export default Vue.extend({
  name: "ViewFeature43",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "I", "K", "S", "Z", "T"],
    parametersLabels: { D: "D", I: "I", K: "K", S: "S", Z: "Z", T: "T" },
    resultsKeys: ["SS", "L", "S", "LL", "Points", "Area", "VL"],
    resultsLabels: { SS: "SS", L: "L", S: "S", LL: "LL", Points: "Points", Area: "Area", VL: "VL" },
    resultsDigits: { SS: 0, L: 0, S: 1, LL: 0, Points: 0, Area: 2, VL: 2 },
    coreFunction: ((window as unknown) as Core).feature43,
    blueprintName: "feature43",
  }),
});
</script>
