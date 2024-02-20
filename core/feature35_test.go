package main

import "testing"

var (
	feature35Names      = []string{"SS", "LA", "LB", "ZMSA", "ZMSB", "L", "H", "PointsA", "PointsB", "Area", "VL"}
	feature35Accuracies = []string{"%.0f", "%.0f", "%.0f", "%.1f", "%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.2f", "%.2f"}
	feature35Types      = []bool{true, false, false, true, true, true, false, false, false, true, true}
)

func Test01feature35(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "I": 10, "K": 20, "S": 8, "E": 2, "U": 10, "A": 6, "B": 4}
	expected := map[string]interface{}{"SS": 3, "LA": []interface{}{76, 1}, "LB": []interface{}{56, 1}, "ZMSA": 12.6, "ZMSB": 13.9, "L": 141, "H": []interface{}{55, 65}, "PointsA": []interface{}{6, 11, 16, 21, 25, 30, 34}, "PointsB": []interface{}{34, 39, 42, 44, 45}, "Area": 0.07, "VL": 0.65}
	genericTester(t, feature35(arguments), expected, feature35Names, feature35Accuracies, feature35Types)
}
