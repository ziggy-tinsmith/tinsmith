package main

import (
	"testing"
)

var (
	feature01Names      = []string{"S", "L", "Points", "Area"}
	feature01Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.2f"}
	feature01Types      = []bool{true, false, false, true}
)

func Test01Feature01(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "R": 500, "S": 5, "E": 10, "T": 12}
	expected := map[string]interface{}{"S": 52.4, "L": []float64{628, 658}, "Points": []float64{73, 75, 81, 89, 97, 103, 105}, "Area": 0.49}
	genericTester(t, feature01(arguments), expected, feature01Names, feature01Accuracies, feature01Types)
}

func Test02Feature01(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "R": 600, "S": 8, "E": 20, "T": 16}
	expected := map[string]interface{}{"S": 78.5, "L": []float64{1257, 1297}, "Points": []float64{59, 61, 65, 72, 79, 89, 93, 97, 99}, "Area": 1.18}
	genericTester(t, feature01(arguments), expected, feature01Names, feature01Accuracies, feature01Types)
}
