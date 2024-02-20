package main

import "testing"

var (
	feature43Names      = []string{"SS", "L", "S", "L", "Points", "Area", "VL"}
	feature43Accuracies = []string{"%.0f", "%.0f", "%.1f", "%.0f", "%.0f", "%.2f", "%.2f"}
	feature43Types      = []bool{true, false, true, true, false, true, true}
)

func Test01feature43(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "I": 10, "K": 20, "S": 8, "Z": 10, "T": 6}
	expected := map[string]interface{}{"SS": 3, "L": []interface{}{326, 5}, "S": 54.3, "LL": 326, "Points": []interface{}{14, 34, 48, 53}, "Area": 0.15, "VL": 1.39}
	genericTester(t, feature43(arguments), expected, feature43Names, feature43Accuracies, feature43Types)
}
