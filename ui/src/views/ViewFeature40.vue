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
  feature40: Function;
}

export default Vue.extend({
  name: "ViewFeature40",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "G", "I", "V", "T"],
    parametersLabels: { D: "D", G: "G", I: "I", V: "V", T: "T" },
    resultsKeys: ["S", "L", "PointsBR", "PointsSR"],
    resultsLabels: { S: "S", L: "L", PointsBR: "PointsBR", PointsSR: "PointsSR" },
    resultsDigits: { S: 1, L: 0, PointsBR: 0, PointsSR: 0 },
    coreFunction: ((window as unknown) as Core).feature40,
    blueprintName: "feature40",
  }),
});
</script>
