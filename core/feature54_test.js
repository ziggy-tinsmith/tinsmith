package main

import "testing"

var (
	feature54Names      = []string{"SR", "BR", "KS", "GS", "PointsL"}
	feature54Accuracies = []string{"%.0f", "%.0f", "%.1f", "%.1f", "%.0f"}
	feature54Types      = []bool{true, true, true, true, false, false, false}
)

func Test01feature54(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "L": 200, "A": 60, "N": 350, "M": 400, "P": 200, "V": 350, "T": 6}
	expected := map[string]interface{}{"SR": 412, "BR": 618, "KS": 104.7, "GS": 157.1, "PointsL": []interface{}{-12, -16, -58, -88}}
	genericTester(t, feature54(arguments), expected, feature54Names, feature54Accuracies, feature54Types)
}
