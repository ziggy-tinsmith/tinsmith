package main

import "testing"

var (
	feature22Names      = []string{"S", "L", "Points"}
	feature22Accuracies = []string{"%.1f", "%.0f", "%.0f"}
	feature22Types      = []bool{true, false, false}
)

func Test01feature22(t *testing.T) {
	arguments := map[string]interface{}{"D": 50, "A": 80, "K": 180, "G": 200, "L": 1000, "J": 50, "V": 2, "T": 10}
	expected := map[string]interface{}{"S": 15.7, "L": []interface{}{157, 187}, "Points": []interface{}{0, 2, 6, 8, 9, 9, 10, 10, 7, 2, 0}}
	genericTester(t, feature22(arguments), expected, feature22Names, feature22Accuracies, feature22Types)
}

func Test02feature22(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "A": 100, "K": 900, "G": 1000, "L": 2000, "J": 100, "V": 10, "T": 5}
	expected := map[string]interface{}{"S": 251.3, "L": []interface{}{1257, 1297}, "Points": []interface{}{71, 84, 20, 25, 94, 71}}
	genericTester(t, feature22(arguments), expected, feature22Names, feature22Accuracies, feature22Types)
}
