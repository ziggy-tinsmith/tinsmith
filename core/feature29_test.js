package main

import "testing"

var (
	feature29Names      = []string{"S", "F1", "PointsA", "F2", "PointsB", "F3", "PointsC", "F4", "PointsD", "Area"}
	feature29Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.2f"}
	feature29Types      = []bool{true, true, false, true, false, true, false, true, false, true}
)

func Test01feature29(t *testing.T) {
	arguments := map[string]interface{}{"D": 300, "A": 400, "B": 500, "H": 50, "V": 10, "W": 15, "T": 8}
	expected := map[string]interface{}{"S": 117.8, "F1": 64, "PointsA": []interface{}{244, 162, 214}, "F2": 99, "PointsB": []interface{}{232, 173, 248}, "F3": 78, "PointsC": []interface{}{276, 196, 245}, "F4": 125, "PointsD": []interface{}{228, 187, 273}, "Area": 0.07}
	genericTester(t, feature29(arguments), expected, feature29Names, feature29Accuracies, feature29Types)
}
