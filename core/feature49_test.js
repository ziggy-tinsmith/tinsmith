package main

import "testing"

var (
	feature49Names      = []string{"S", "F1", "PointsA", "PointsB", "F2", "PointsM"}
	feature49Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature49Types      = []bool{true, true, false, false, true, false}
)

func Test01feature49(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "A": 300, "B": 350, "L": 200, "V": 200, "T": 6}
	expected := map[string]interface{}{"S": 104.7, "F1": 150, "PointsA": []interface{}{230, 133}, "PointsB": []interface{}{358, 292}, "F2": 250, "PointsM": []interface{}{153, 166}}
	genericTester(t, feature49(arguments), expected, feature49Names, feature49Accuracies, feature49Types)
}
