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
  feature28: Function;
}

export default Vue.extend({
  name: "ViewFeature28",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "A", "B", "H", "T"],
    parametersLabels: { D: "D", A: "A", B: "B", H: "H", T: "T" },
    resultsKeys: ["S", "F1", "Points", "F2", "Area"],
    resultsLabels: { S: "S", F1: "F1", Points: "Points", F2: "F2", Area: "Area" },
    resultsDigits: { S: 1, F1: 0, Points: 0, F2: 0, Area: 2 },
    coreFunction: ((window as unknown) as Core).feature28,
    blueprintName: "feature28",
  }),
});
</script>
