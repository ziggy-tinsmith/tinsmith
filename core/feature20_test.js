package main

import "testing"

var (
	feature20Names      = []string{"S", "L", "Points"}
	feature20Accuracies = []string{"%.1f", "%.0f", "%.0f"}
	feature20Types      = []bool{true, false, false}
)

func Test01feature20(t *testing.T) {
	arguments := map[string]interface{}{"D": 50, "G": 200, "R": 100, "V": 2, "T": 10}
	expected := map[string]interface{}{"S": 15.7, "L": []interface{}{157, 187}, "Points": []interface{}{3, 1, 0, 1, 3, 4}}
	genericTester(t, feature20(arguments), expected, feature20Names, feature20Accuracies, feature20Types)
}

func Test02feature20(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "G": 1400, "R": 700, "V": 100, "T": 5}
	expected := map[string]interface{}{"S": 251.3, "L": []interface{}{1257, 1297}, "Points": []interface{}{7, 3, 54}}
	genericTester(t, feature20(arguments), expected, feature20Names, feature20Accuracies, feature20Types)
}
