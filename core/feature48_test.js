package main

import "testing"

var (
	feature48Names      = []string{"S", "F1", "PointsA", "PointsB", "F2", "PointsM"}
	feature48Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature48Types      = []bool{true, true, false, false, true, false}
)

func Test01feature48(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "A": 300, "B": 350, "L": 200, "V": 200, "T": 6}
	expected := map[string]interface{}{"S": 104.7, "F1": 112, "PointsA": []interface{}{208, 113}, "PointsB": []interface{}{358, 382}, "F2": 364, "PointsM": []interface{}{153, 164}}
	genericTester(t, feature48(arguments), expected, feature48Names, feature48Accuracies, feature48Types)
}
