<template>
  <v-main>
    <v-card class="d-flex flex-column ma-0 pa-0 fill-height" flat>
      <v-card class="mx-2 mt-3 mb-1 px-4 py-0" align="center">
        <v-row>
          <v-col v-for="key in parametersKeys" v-bind:key="key">
            <v-text-field
              v-model="parameters[key]"
              :min="0"
              dense
              :label="parametersLabels[key]"
              v-bind:key="key"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-dialog v-model="help" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-help-circle-outline</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="help = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-card-text align="center">
                  <v-img
                    max-height="70vh"
                    max-width="80vh"
                    contain
                    :src="require('@/assets/feature01.png')"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="mx-2 mt-1 mb-3 px-4 py-0 flex-grow-1 d-flex align-stretch">
        <v-container>
          <table>
            <tr v-for="entry in feature01Computed()" v-bind:key="entry.key">
              <td align="left">{{ entry.label }}</td>
              <td>{{ entry.value }}</td>
            </tr>
          </table>
        </v-container>
      </v-card>
    </v-card>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";

interface Core {
  feature01: Function;
}

interface ParametersEntries {
  [key: string]: string;
}

interface Parameters {
  [key: string]: number;
}

interface Results {
  [key: string]: number | number[];
}

interface ResultEntry {
  key: string;
  label: string;
  value: string;
}

function prepareParameters(unprepared: ParametersEntries): Parameters {
  const prepared: Parameters = {};
  Object.keys(unprepared).forEach((key: string) => {
    prepared[key] = parseFloat(unprepared[key]) || NaN;
  });
  return prepared;
}

function prepareResult(
  composite: Results,
  key: string,
  digits: number
): string {
  if (composite != null) {
    if (Array.isArray(composite[key])) {
      const vector: number[] = composite[key] as number[];
      return vector.map((item: number) => item.toFixed(digits)).join(", ");
    }
    if (typeof composite[key] === "number") {
      const scalar: number = composite[key] as number;
      return scalar.toFixed(digits);
    }
  }
  return "";
}

function prepareResults(
  composite: Results,
  keys: string[],
  labels: Record<string, string>,
  digits: Record<string, number>
) {
  const prepared: ResultEntry[] = keys.map((key: string) => {
    const entry: ResultEntry = {
      key: key,
      label: labels[key],
      value: prepareResult(composite, key, digits[key]),
    };
    return entry;
  }) as ResultEntry[];
  return prepared;
}

export default Vue.extend({
  name: "ViewFeature01",

  data: () => ({
    parametersKeys: ["D", "R", "S", "E", "T"],
    parametersLabels: { D: "D", R: "R", S: "S", E: "E", T: "T" },
    parameters: {
      D: "",
      R: "",
      S: "",
      E: "",
      T: "",
    },
    resultsKeys: ["S", "L", "Points", "Area"],
    resultsLabels: { S: "‡", L: "◯", Points: "·", Area: "▨" },
    resultsDigits: { S: 1, L: 0, Points: 0, Area: 2 },
    help: false,
  }),

  methods: {
    feature01Computed() {
      return prepareResults(
        JSON.parse(
          ((window as unknown) as Core).feature01(
            JSON.stringify(prepareParameters(this.parameters))
          )
        ),
        this.resultsKeys,
        this.resultsLabels,
        this.resultsDigits
      );
    },
  },
});
</script>
