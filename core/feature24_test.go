package main

import "testing"

var (
	feature24Names      = []string{"S", "L", "P1", "P2"}
	feature24Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f"}
	feature24Types      = []bool{true, false, false, false}
)

func Test01feature24(t *testing.T) {
	arguments := map[string]interface{}{"D": 50, "G": 200, "A": 2, "T": 10}
	expected := map[string]interface{}{"S": 15.7, "L": []interface{}{157, 187}, "P1": []interface{}{5, 4, 2}, "P2": []interface{}{3, 2, 0}}
	genericTester(t, feature24(arguments), expected, feature24Names, feature24Accuracies, feature24Types)
}

func Test02feature24(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "G": 1000, "A": 10, "T": 5}
	expected := map[string]interface{}{"S": 251.3, "L": []interface{}{1257, 1297}, "P1": []interface{}{50, 14}, "P2": []interface{}{43, 4}}
	genericTester(t, feature24(arguments), expected, feature24Names, feature24Accuracies, feature24Types)
}
