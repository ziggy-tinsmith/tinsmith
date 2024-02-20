package main

import "testing"

var (
	feature30Names      = []string{"S", "F1", "PointsA", "PointsB", "F2", "F3"}
	feature30Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature30Types      = []bool{true, true, false, false, true, true}
)

func Test01feature30(t *testing.T) {
	arguments := map[string]interface{}{"D": 300, "A": 400, "B": 500, "K": 50, "G": 70, "V": 10, "T": 8}
	expected := map[string]interface{}{"S": 117.8, "F1": 64, "PointsA": []interface{}{258, 174, 220}, "PointsB": []interface{}{243, 191, 266}, "F2": 92, "F3": 116}
	genericTester(t, feature30(arguments), expected, feature30Names, feature30Accuracies, feature30Types)
}
