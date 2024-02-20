package main

import (
	"testing"
)

var (
	feature05Names      = []string{"S", "L", "Points", "T", "Area"}
	feature05Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.2f"}
	feature05Types      = []bool{true, false, false, true, true}
)

func Test01Feature05(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "R": 500, "S": 5, "A": 90, "E": 10, "T": 12}
	expected := map[string]interface{}{"S": 52.4, "L": []interface{}{628, 658}, "Points": []interface{}{73, 75, 81, 89, 97, 103, 105}, "T": 500, "Area": 0.49}
	genericTester(t, feature05(arguments), expected, feature05Names, feature05Accuracies, feature05Types)
}

func Test02Feature05(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "R": 600, "S": 8, "A": 90, "E": 20, "T": 16}
	expected := map[string]interface{}{"S": 78.5, "L": []interface{}{1257, 1297}, "Points": []interface{}{59, 61, 65, 72, 79, 87, 93, 97, 99}, "T": 600, "Area": 1.18}
	genericTester(t, feature05(arguments), expected, feature05Names, feature05Accuracies, feature05Types)
}
