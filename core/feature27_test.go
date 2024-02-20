package main

import "testing"

var (
	feature27Names      = []string{"KS", "GS", "R1", "R2", "L1", "L2"}
	feature27Accuracies = []string{"%.1f", "%.1f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature27Types      = []bool{true, true, false, true, true, false}
)

func Test01feature27(t *testing.T) {
	arguments := map[string]interface{}{"K": 100, "G": 150, "L": 100, "V": 20, "Z": 12, "T": 8}
	expected := map[string]interface{}{"KS": 37.0, "GS": 61.2, "R1": []interface{}{337, 334, 325, 317, 313}, "R2": []interface{}{204, 202, 197, 191, 189}, "L1": []interface{}{131, 132, 129, 125, 124}, "L2": []interface{}{138, 132, 128, 130}}
	genericTester(t, feature27(arguments), expected, feature27Names, feature27Accuracies, feature27Types)
}
