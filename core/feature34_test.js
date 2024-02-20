package main

import "testing"

var (
	feature34Names      = []string{"SS", "LA", "LB", "ZMSA", "ZMSB", "L", "H", "PointsA", "PointsB", "Area", "VL"}
	feature34Accuracies = []string{"%.0f", "%.0f", "%.0f", "%.1f", "%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.2f", "%.2f"}
	feature34Types      = []bool{true, false, false, true, true, true, false, false, false, true, true}
)

func Test01feature34(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "I": 10, "K": 20, "S": 8, "E": 2, "U": 10, "A": 6, "B": 4}
	expected := map[string]interface{}{"SS": 3, "LA": []interface{}{78, 1}, "LB": []interface{}{47, 1}, "ZMSA": 13.0, "ZMSB": 11.7, "L": 135, "H": []interface{}{44, 54}, "PointsA": []interface{}{6, 11, 16, 21, 26, 31, 36}, "PointsB": []interface{}{36, 40, 43, 45, 45}, "Area": 0.06, "VL": 0.56}
	genericTester(t, feature34(arguments), expected, feature34Names, feature34Accuracies, feature34Types)
}
