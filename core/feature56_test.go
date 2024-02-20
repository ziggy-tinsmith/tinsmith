package main

import "testing"

var (
	feature56Names      = []string{"SR", "BR", "KS", "GS", "PointsL"}
	feature56Accuracies = []string{"%.0f", "%.0f", "%.1f", "%.1f", "%.0f"}
	feature56Types      = []bool{true, true, true, true, false}
)

func Test01feature56(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "L": 180, "A": 45, "E": 10, "T": 6}
	expected := map[string]interface{}{"SR": 364, "BR": 560, "KS": 101.6, "GS": 156.6, "PointsL": []interface{}{197, 106, -8, -47}}
	genericTester(t, feature56(arguments), expected, feature56Names, feature56Accuracies, feature56Types)
}
