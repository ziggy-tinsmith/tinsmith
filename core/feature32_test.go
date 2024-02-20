package main

import "testing"

var (
	feature32Names      = []string{"AA", "BA", "LA", "HA", "AB", "BB", "LB", "HB", "Area"}
	feature32Accuracies = []string{"%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.2f"}
	feature32Types      = []bool{true, false, false, false, true, false, false, false, true}
)

func Test01feature32(t *testing.T) {
	arguments := map[string]interface{}{"A": 500, "B": 600, "H": 300, "I": 2, "C": 400, "D": 500, "S": 300}
	expected := map[string]interface{}{"AA": 81, "BA": []interface{}{-3, 42}, "LA": []interface{}{504, 252, 504, 301, 603, 302, 604}, "HA": []interface{}{0, 300, 304}, "AB": 81, "BB": []interface{}{-3, 42}, "LB": []interface{}{404, 202, 404, 251, 503, 252, 504}, "HB": []interface{}{0, 300, 304}, "Area": 0.61}
	genericTester(t, feature32(arguments), expected, feature32Names, feature32Accuracies, feature32Types)
}
