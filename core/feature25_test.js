package main

import "testing"

var (
	feature25Names      = []string{"KS", "GS", "RK", "RG"}
	feature25Accuracies = []string{"%.1f", "%.1f", "%.0f", "%.0f"}
	feature25Types      = []bool{true, true, false, false}
)

func Test01feature25(t *testing.T) {
	arguments := map[string]interface{}{"K": 40, "G": 50, "L": 100, "D": 90, "E": 10, "T": 8}
	expected := map[string]interface{}{"KS": 15.7, "GS": 20.0, "RK": []interface{}{400, 398, 394}, "RG": []interface{}{511, 507, 503}}
	genericTester(t, feature25(arguments), expected, feature25Names, feature25Accuracies, feature25Types)
}
