package main

import "testing"

var (
	feature23Names      = []string{"S", "L", "Points"}
	feature23Accuracies = []string{"%.1f", "%.0f", "%.0f"}
	feature23Types      = []bool{true, false, false}
)

func Test01feature23(t *testing.T) {
	arguments := map[string]interface{}{"D": 50, "K": 180, "G": 200, "L": 1000, "V": 2, "T": 10}
	expected := map[string]interface{}{"S": 15.7, "L": []interface{}{157, 187}, "Points": []interface{}{4600, 4641, 4746, 4869, 4964, 5000}}
	genericTester(t, feature23(arguments), expected, feature23Names, feature23Accuracies, feature23Types)
}

func Test02feature23(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "K": 900, "G": 1000, "L": 2000, "V": 10, "T": 5}
	expected := map[string]interface{}{"S": 251.3, "L": []interface{}{1257, 1297}, "Points": []interface{}{15200, 15486, 15927}}
	genericTester(t, feature23(arguments), expected, feature23Names, feature23Accuracies, feature23Types)
}
