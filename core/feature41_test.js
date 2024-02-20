package main

import "testing"

var (
	feature41Names      = []string{"S", "L", "PointsBR", "PointsSR"}
	feature41Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f"}
	feature41Types      = []bool{true, false, false, false}
)

func Test01feature41(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "G": 1000, "I": 10, "V": 250, "T": 6}
	expected := map[string]interface{}{"S": 104.7, "L": []interface{}{628, 658}, "PointsBR": []interface{}{0, 16, 48, 65}, "PointsSR": []interface{}{}}
	genericTester(t, feature41(arguments), expected, feature41Names, feature41Accuracies, feature41Types)
}

func Test02feature41(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "G": 400, "I": 10, "V": 110, "T": 10}
	expected := map[string]interface{}{"S": 62.8, "L": []interface{}{628, 658}, "PointsBR": []interface{}{0, 6, 23}, "PointsSR": []interface{}{116, 76, 45}}
	genericTester(t, feature41(arguments), expected, feature41Names, feature41Accuracies, feature41Types)
}
