package main

import "testing"

var (
	feature33Names      = []string{"SS", "S", "CL", "R", "H", "Points", "Area", "Volume"}
	feature33Accuracies = []string{"%.0f", "%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.2f", "%.2f"}
	feature33Types      = []bool{true, true, true, true, true, false, true, true}
)

func Test01feature33(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "I": 10, "K": 20, "S": 8, "E": 2, "T": 6}
	expected := map[string]interface{}{"SS": 2, "S": 17.5, "CL": 112, "R": 134, "H": 29, "Points": []interface{}{6, 13, 21, 28, 34, 41, 48}, "Area": 0.04, "VL": 0.39}
	genericTester(t, feature33(arguments), expected, feature33Names, feature33Accuracies, feature33Types)
}
