package main

import (
	"testing"
)

var (
	feature06Names      = []string{"S", "L", "Points"}
	feature06Accuracies = []string{"%.1f", "%.0f", "%.0f"}
	feature06Types      = []bool{true, false, true}
)

func Test01Feature06(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "A": 90, "T": 12}
	expected := map[string]interface{}{"S": 52.4, "L": []float64{628, 658}, "Points": []float64{0, 13, 50, 100, 150, 187, 200}}
	genericTester(t, feature06(arguments), expected, feature06Names, feature06Accuracies, feature06Types)
}

func Test02Feature06(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "A": 90, "T": 16}
	expected := map[string]interface{}{"S": 78.5, "L": []float64{1257, 1297}, "Points": []float64{0, 15, 59, 123, 200, 277, 341, 385, 400}}
	genericTester(t, feature06(arguments), expected, feature06Names, feature06Accuracies, feature06Types)
}
