package main

import (
	"testing"
)

var (
	feature08BNames      = []string{"R2", "R1", "B", "C"}
	feature08BAccuracies = []string{"%.0f", "%.0f", "%.0f", "%.0f"}
	feature08BTypes      = []bool{true, false, true, true}
)

func Test01Feature08B(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "I": 10, "T": 16}
	expected := map[string]interface{}{"R2": 90, "R1": []interface{}{100, 106}, "B": 39, "C": 39}
	genericTester(t, feature08B(arguments), expected, feature08BNames, feature08BAccuracies, feature08BTypes)
}
