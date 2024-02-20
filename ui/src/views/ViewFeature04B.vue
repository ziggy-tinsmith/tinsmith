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
  feature04b: Function;
}

export default Vue.extend({
  name: "ViewFeature04B",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["M"],
    parametersLabels: { M: "M" },
    resultsKeys: ["A", "B"],
    resultsLabels: { A: "A", B: "B" },
    resultsDigits: { A: 0, B: 0 },
    coreFunction: ((window as unknown) as Core).feature04b,
    blueprintName: "feature04",
  }),
});
</script>
