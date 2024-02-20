package main

import "testing"

var (
	feature44Names      = []string{"S", "L", "PointsB", "PointsA"}
	feature44Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f"}
	feature44Types      = []bool{true, false, false, false}
)

func Test01feature44(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "L": 200, "V": 200, "T": 8, "LL": 300}
	expected := map[string]interface{}{"S": 78.5, "L": []interface{}{628, 658}, "PointsB": []interface{}{100, 129, 200, 200, 200}, "PointsA": []interface{}{200, 229, 300}}
	genericTester(t, feature44(arguments), expected, feature44Names, feature44Accuracies, feature44Types)
}

func Test02feature44(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "L": 400, "V": 400, "T": 6, "LL": 600}
	expected := map[string]interface{}{"S": 209.4, "L": []interface{}{1257, 1297}, "PointsB": []interface{}{200, 300, 400}, "PointsA": []interface{}{400, 500}}
	genericTester(t, feature44(arguments), expected, feature44Names, feature44Accuracies, feature44Types)
}
