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
  feature03: Function;
}

export default Vue.extend({
  name: "ViewFeature03",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["K", "G", "D"],
    parametersLabels: { K: "K", G: "G", D: "D" },
    resultsKeys: ["R", "A"],
    resultsLabels: { R: "R", A: "A" },
    resultsDigits: { R: 0, A: 2 },
    coreFunction: ((window as unknown) as Core).feature03,
    blueprintName: "feature03",
  }),
});
</script>
