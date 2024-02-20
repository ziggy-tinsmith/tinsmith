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
  feature39: Function;
}

export default Vue.extend({
  name: "ViewFeature39",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "G", "I", "V", "T"],
    parametersLabels: { D: "D", G: "G", I: "I", V: "V", T: "T" },
    resultsKeys: ["S", "L", "Points"],
    resultsLabels: { S: "S", L: "L", Points: "Points" },
    resultsDigits: { S: 1, L: 0, Points: 0 },
    coreFunction: ((window as unknown) as Core).feature39,
    blueprintName: "feature39",
  }),
});
</script>
