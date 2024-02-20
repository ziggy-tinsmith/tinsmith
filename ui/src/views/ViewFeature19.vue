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
  feature19: Function;
}

export default Vue.extend({
  name: "ViewFeature19",

  components: {
    Feature,
  },

  data: () => ({
    parametersKeys: ["D", "G", "R", "A", "V", "T"],
    parametersLabels: { D: "⌀| D", G: "⌀◜ D", R: "⎋ R", A: "⟷ A", V: "⟷ V", T: "⧻ T" },
    resultsKeys: ["S", "L", "Points"],
    resultsLabels: { S: "∡ S", L: "◯ L", Points: "⦙" },
    resultsDigits: { S: 1, L: 0, Points: 0 },
    coreFunction: ((window as unknown) as Core).feature19,
    blueprintName: "feature19",
  }),
});
</script>
