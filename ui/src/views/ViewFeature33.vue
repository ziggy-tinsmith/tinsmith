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
  feature33: Function;
}

export default Vue.extend({
  name: "ViewFeature33",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "I", "K", "S", "E", "T"],
    parametersLabels: { D: "D", I: "I", K: "K", S: "S", E: "E", T: "T" },
    resultsKeys: ["SS", "S", "CL", "R", "H", "Points", "Area", "Volume"],
    resultsLabels: { SS: "SS", S: "S", CL: "CL", R: "R", H: "H", Points: "Points", Area: "Area", Volume: "Volume" },
    resultsDigits: { SS: 0, S: 1, CL: 0, R: 0, H: 0, Points: 0, Area: 2, Volume: 2 },
    coreFunction: ((window as unknown) as Core).feature33,
    blueprintName: "feature33",
  }),
});
</script>
