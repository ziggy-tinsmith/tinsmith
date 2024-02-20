package main

import "testing"

var (
	feature39Names      = []string{"S", "L", "Points"}
	feature39Accuracies = []string{"%.1f", "%.0f", "%.0f"}
	feature39Types      = []bool{true, false, false}
)

func Test01feature39(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "G": 1000, "I": 10, "V": 250, "T": 6}
	expected := map[string]interface{}{"S": 104.7, "L": []interface{}{628, 658}, "Points": []interface{}{0, 12, 38, 51}}
	genericTester(t, feature39(arguments), expected, feature39Names, feature39Accuracies, feature39Types)
}
