<template>
  <v-main>
    <v-card class="d-flex flex-column ma-0 pa-0 fill-height" flat>
      <v-card class="mx-2 mt-3 mb-1 px-4 py-0" align="center">
        <v-row>
          <v-col>
            <v-text-field v-model="D" :min="0" dense label="D"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="R" :min="0" dense label="R"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="S" :min="0" dense label="S"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="E" :min="0" dense label="E"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="T" :min="0" dense label="T"></v-text-field>
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
          <v-row>
            <v-col cols="1">‡</v-col>
            <v-col cols="11">{{ getS(feature01Computed()) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="1">◯</v-col>
            <v-col cols="11">{{ getL(feature01Computed()) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="1">·</v-col>
            <v-col cols="11">{{ getPoints(feature01Computed()) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="1">▨</v-col>
            <v-col cols="11">{{ getArea(feature01Computed()) }}</v-col>
          </v-row>
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

interface Feature01Computed {
  S: number;
  L: number[];
  Points: number[];
  Area: number;
}

export default Vue.extend({
  name: "ViewFeature01",

  data: () => ({
    D: "",
    R: "",
    S: "",
    E: "",
    T: "",
    help: false,
  }),

  methods: {
    feature01Computed() {
      return JSON.parse(((window as unknown) as Core).feature01(JSON.stringify({
        D: parseFloat(this.D) || NaN,
        R: parseFloat(this.R) || NaN,
        S: parseFloat(this.S) || NaN,
        E: parseFloat(this.E) || NaN,
        T: parseFloat(this.T) || NaN,
      })));
    },

    getS(composite: Feature01Computed): string {
      if (composite != null) {
        return composite.S.toFixed(1);
      } else {
        return "";
      }
    },

    getL(composite: Feature01Computed): string {
      if (composite != null) {
        return composite.L.map((item: number) => item.toFixed(0)).join(", ");
      } else {
        return "";
      }
    },

    getPoints(composite: Feature01Computed): string {
      if (composite != null) {
        return composite.Points.map((item: number) => item.toFixed(0)).join(", ");
      } else {
        return "";
      }
    },

    getArea(composite: Feature01Computed): string {
      if (composite != null) {
        return composite.Area.toFixed(2);
      } else {
        return "";
      }
    },
  },
});
</script>
