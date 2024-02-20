<template>
  <v-main>
    <v-card class="d-flex flex-column ma-0 pa-0 fill-height" flat>
      <v-card class="mx-2 mt-3 mb-1 px-4 py-0" align="center">
        <v-row>
          <v-col>
            <v-text-field v-model="dd" :min="0" dense label="D"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="rr" :min="0" dense label="R"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="ss" :min="0" dense label="S"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="ee" :min="0" dense label="E"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="tt" :min="0" dense label="T"></v-text-field>
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
            <v-col cols="11">
              {{ getLL1(feature01Computed()) }}
              &nbsp;
              {{ getLL2(feature01Computed()) }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1">·</v-col>
            <v-col cols="11">{{ getP(feature01Computed()) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="1">⬛</v-col>
            <v-col cols="11">{{ getA(feature01Computed()) }}</v-col>
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
  s: number;
  ll1: number;
  ll2: number;
  p: number[];
  a: number;
}

export default Vue.extend({
  name: "ViewFeature01",

  data: () => ({
    dd: "",
    rr: "",
    ss: "",
    ee: "",
    tt: "",
    help: false,
  }),

  methods: {
    feature01Computed() {
      return ((window as unknown) as Core).feature01({
        dd: parseFloat(this.dd) || NaN,
        rr: parseFloat(this.rr) || NaN,
        ss: parseFloat(this.ss) || NaN,
        ee: parseFloat(this.ee) || NaN,
        tt: parseFloat(this.tt) || NaN,
      });
    },

    getS(composite: Feature01Computed): string {
      if (composite != null) {
        return composite.s.toFixed(1);
      } else {
        return "";
      }
    },

    getLL1(composite: Feature01Computed): string {
      if (composite != null) {
        return composite.ll1.toFixed(0);
      } else {
        return "";
      }
    },

    getLL2(composite: Feature01Computed): string {
      if (composite != null) {
        return composite.ll2.toFixed(0);
      } else {
        return "";
      }
    },

    getP(composite: Feature01Computed): string {
      if (composite != null) {
        return composite.p.map((item: number) => item.toFixed(0)).join(", ");
      } else {
        return "";
      }
    },

    getA(composite: Feature01Computed): string {
      if (composite != null) {
        return composite.a.toFixed(2);
      } else {
        return "";
      }
    },
  },
});
</script>
