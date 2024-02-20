package main

import "testing"

var (
	feature31Names      = []string{"S", "F1", "PointsA", "F2", "PointsB", "F3", "OS", "L", "Points"}
	feature31Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.1f", "%.0f", "%.0f"}
	feature31Types      = []bool{true, true, false, true, false, true, true, false, false}
)

func Test01feature31(t *testing.T) {
	arguments := map[string]interface{}{"A": 500, "B": 600, "H": 60, "D": 400, "R": 200, "S": 4, "Z": 12, "T": 6}
	expected := map[string]interface{}{"S": 209.4, "F1": 78, "PointsA": []interface{}{310, 212}, "F2": 141, "PointsB": []interface{}{287, 253}, "F3": 148, "OS": 209.4, "L": []interface{}{1257, 1297}, "Points": []interface{}{12, 32, 72, 92}}
	genericTester(t, feature31(arguments), expected, feature31Names, feature31Accuracies, feature31Types)
}

func Test02feature31(t *testing.T) {
	arguments := map[string]interface{}{"A": 400, "B": 500, "H": 60, "D": 300, "R": 150, "S": 5, "Z": 10, "T": 8}
	expected := map[string]interface{}{"S": 117.8, "F1": 78, "PointsA": []interface{}{262, 184, 239}, "F2": 130, "PointsB": []interface{}{239, 199, 277}, "F3": 119, "OS": 117.8, "L": []interface{}{942, 972}, "Points": []interface{}{10, 17, 34, 51, 58}}
	genericTester(t, feature31(arguments), expected, feature31Names, feature31Accuracies, feature31Types)
}
