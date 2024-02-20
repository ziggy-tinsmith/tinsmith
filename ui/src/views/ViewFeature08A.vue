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
  feature08a: Function;
}

export default Vue.extend({
  name: "ViewFeature08A",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "I", "K"],
    parametersLabels: { D: "D", I: "I", K: "K" },
    resultsKeys: ["GB"],
    resultsLabels: { GB: "GB" },
    resultsDigits: { GB: 0 },
    coreFunction: ((window as unknown) as Core).feature08a,
    blueprintName: "feature08",
  }),
});
</script>
