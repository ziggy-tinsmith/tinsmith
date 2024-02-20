package main

import "testing"

var (
	feature21Names      = []string{"S", "L", "Points", "B", "MH", "PH"}
	feature21Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature21Types      = []bool{true, false, false, false, false, false}
)

func Test01feature21(t *testing.T) {
	arguments := map[string]interface{}{"D": 50, "K": 150, "G": 200, "L": 1000, "A": 80, "V": 2, "T": 10}
	expected := map[string]interface{}{"S": 15.7, "L": []interface{}{157, 187}, "Points": []interface{}{0, 2, 5, 5, 3, 1, 2, 4, 4, 1, 0}, "B": []interface{}{25, 20, 8, -8, -21, -26}, "MH": []interface{}{0, -15, -24, -24, -15, 0}, "PH": []interface{}{0, 15, 24, 24, 15, 0}}
	genericTester(t, feature21(arguments), expected, feature21Names, feature21Accuracies, feature21Types)
}

func Test02feature21(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "K": 1000, "G": 1400, "L": 2000, "A": 85, "V": 10, "T": 5}
	expected := map[string]interface{}{"S": 251.3, "L": []interface{}{1257, 1297}, "Points": []interface{}{0, 54, 53, 48, 46, 0}, "B": []interface{}{205, 62, -165}, "MH": []interface{}{-4, -191, -121}, "PH": []interface{}{-4, 191, 115}}
	genericTester(t, feature21(arguments), expected, feature21Names, feature21Accuracies, feature21Types)
}
