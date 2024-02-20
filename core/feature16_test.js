package main

import "testing"

var (
	feature16Names      = []string{"S", "L", "Points", "B", "H"}
	feature16Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature16Types      = []bool{true, false, false, false, false}
)

func Test01Feature16(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "K": 25, "G": 50, "M": 250, "T": 10}
	expected := map[string]interface{}{"S": 62.8, "L": []interface{}{628, 658}, "Points": []interface{}{39, 23, 2, 7, 38, 64}, "B": []interface{}{111, 86, 31, -32, -91, -124}, "H": []interface{}{0, 59, 95}}
	genericTester(t, feature16(arguments), expected, feature16Names, feature16Accuracies, feature16Types)
}

func Test02Feature16(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "K": 50, "G": 100, "M": 450, "T": 8}
	expected := map[string]interface{}{"S": 157.1, "L": []interface{}{1257, 1297}, "Points": []interface{}{101, 41, 0, 61, 151}, "B": []interface{}{234, 150, 0, -157, -265}, "H": []interface{}{0, 141, 200}}
	genericTester(t, feature16(arguments), expected, feature16Names, feature16Accuracies, feature16Types)
}
