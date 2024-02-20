package main

import (
	"testing"
)

var (
	feature15Names      = []string{"S", "L", "Points", "B", "H"}
	feature15Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature15Types      = []bool{true, false, false, false, false}
)

func Test01Feature15(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "G": 400, "V": 100, "T": 10}
	expected := map[string]interface{}{"S": 62.8, "L": []interface{}{628, 658}, "Points": []interface{}{0, 1, 12, 49, 115, 200}, "B": []interface{}{0, 0, 0, 0, 0, 0}, "H": []interface{}{0, 59, 95}}
	genericTester(t, feature15(arguments), expected, feature15Names, feature15Accuracies, feature15Types)
}

func Test02Feature15(t *testing.T) {
	arguments := map[string]interface{}{"D": 350, "G": 600, "V": 100, "T": 10}
	expected := map[string]interface{}{"S": 110.0, "L": []interface{}{1100, 1140}, "Points": []interface{}{10, 3, 4, 43, 122, 180}, "B": []interface{}{0, 0, 0, 0, 0, 0}, "H": []interface{}{0, 103, 166}}
	genericTester(t, feature15(arguments), expected, feature15Names, feature15Accuracies, feature15Types)
}
