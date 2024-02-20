package main

import (
	"testing"
)

var (
	feature14Names      = []string{"SC", "BC", "R2", "R1", "L1", "L2", "Area"}
	feature14Accuracies = []string{"%.1f", "%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.2f"}
	feature14Types      = []bool{true, true, false, false, false, false, true}
)

func Test01Feature14(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 400, "L": 100, "Z": 60, "T": 10}
	expected := map[string]interface{}{"SC": 36.2, "BC": 152.3, "R2": []interface{}{129, 124, 110, 89, 68, 58}, "R1": []interface{}{542, 521, 461, 374, 285, 242}, "L1": []interface{}{413, 397, 352, 285, 217, 185}, "L2": []interface{}{399, 344, 271, 205, 188}, "Area": 0.25}
	genericTester(t, feature14(arguments), expected, feature14Names, feature14Accuracies, feature14Types)
}
