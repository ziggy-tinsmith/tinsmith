package main

import "testing"

var (
	feature40Names      = []string{"S", "L", "PointsBR", "PointsSR"}
	feature40Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f"}
	feature40Types      = []bool{true, false, false, false}
)

func Test01feature40(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "G": 1000, "I": 10, "V": 250, "T": 6}
	expected := map[string]interface{}{"S": 104.7, "L": []interface{}{628, 658}, "PointsBR": []interface{}{0, 12, 38, 51}, "PointsSR": []interface{}{}}
	genericTester(t, feature40(arguments), expected, feature40Names, feature40Accuracies, feature40Types)
}

func Test02feature40(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "G": 400, "I": 10, "V": 110, "T": 10}
	expected := map[string]interface{}{"S": 62.8, "L": []interface{}{628, 658}, "PointsBR": []interface{}{0, 5, 19, 36}, "PointsSR": []interface{}{93, 59}}
	genericTester(t, feature40(arguments), expected, feature40Names, feature40Accuracies, feature40Types)
}
