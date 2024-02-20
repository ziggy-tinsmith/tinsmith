package main

import "testing"

var (
	feature28Names      = []string{"S", "F1", "Points", "F2", "Area"}
	feature28Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.2f"}
	feature28Types      = []bool{true, true, false, true, true}
)

func Test01feature28(t *testing.T) {
	arguments := map[string]interface{}{"D": 300, "A": 400, "B": 500, "H": 50, "T": 8}
	expected := map[string]interface{}{"S": 117.8, "F1": 71, "Points": []interface{}{260, 179, 229}, "F2": 112, "Area": 0.12}
	genericTester(t, feature28(arguments), expected, feature28Names, feature28Accuracies, feature28Types)
}
