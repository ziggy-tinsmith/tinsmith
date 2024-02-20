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
  feature04a: Function;
}

export default Vue.extend({
  name: "ViewFeature04A",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["A"],
    parametersLabels: { A: "∠ A" },
    resultsKeys: ["M"],
    resultsLabels: { M: "⟷⧻ M" },
    resultsDigits: { M: 0 },
    coreFunction: ((window as unknown) as Core).feature04a,
    blueprintName: "feature04",
  }),
});
</script>
