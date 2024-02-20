package main

import "testing"

var (
	feature19Names      = []string{"S", "L", "Points"}
	feature19Accuracies = []string{"%.1f", "%.0f", "%.0f"}
	feature19Types      = []bool{true, false, false}
)

func Test01feature19(t *testing.T) {
	arguments := map[string]interface{}{"D": 50, "G": 200, "R": 100, "A": 120, "V": 2, "T": 10}
	expected := map[string]interface{}{"S": 15.7, "L": []interface{}{157, 187}, "Points": []interface{}{0, 4, 13, 25, 35, 38, 35, 27, 15, 4, 0}}
	genericTester(t, feature19(arguments), expected, feature19Names, feature19Accuracies, feature19Types)
}

func Test02feature19(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "G": 1400, "R": 700, "A": 1000, "V": 100, "T": 5}
	expected := map[string]interface{}{"S": 251.3, "L": []interface{}{1257, 1297}, "Points": []interface{}{9, 118, 368, 432, 196, 9}}
	genericTester(t, feature19(arguments), expected, feature19Names, feature19Accuracies, feature19Types)
}
