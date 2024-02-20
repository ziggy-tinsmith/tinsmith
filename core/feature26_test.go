package main

import "testing"

var (
	feature26Names      = []string{"S", "P1", "P2", "V", "L", "P1L", "P2L"}
	feature26Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature26Types      = []bool{true, false, false, true, true, false, false}
)

func Test01feature26(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "L": 600, "V": 10, "Z": 12, "T": 8}
	expected := map[string]interface{}{"S": 39.2, "P1": []interface{}{624, 624, 624, 624, 624}, "P2": []interface{}{625, 625, 625, 625}, "V": 10, "L": 624, "P1L": []interface{}{15, 329}, "P2L": []interface{}{172, 172}}
	genericTester(t, feature26(arguments), expected, feature26Names, feature26Accuracies, feature26Types)
}

func Test02feature26(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "L": 600, "V": 20, "Z": 20, "T": 5}
	expected := map[string]interface{}{"S": 125.2, "P1": []interface{}{640, 640, 640}, "P2": []interface{}{651, 649}, "V": 21, "L": 640, "P1L": []interface{}{20, 648}, "P2L": []interface{}{334, 334}}
	genericTester(t, feature26(arguments), expected, feature26Names, feature26Accuracies, feature26Types)
}
