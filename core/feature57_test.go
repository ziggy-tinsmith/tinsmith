package main

import "testing"

var (
	feature57Names      = []string{"SR", "BR", "KS", "GS", "PointsL"}
	feature57Accuracies = []string{"%.0f", "%.0f", "%.1f", "%.1f", "%.0f"}
	feature57Types      = []bool{true, true, true, true, false}
)

func Test01feature57(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "L": 180, "A": 45, "E": 10, "T": 6}
	expected := map[string]interface{}{"SR": 374, "BR": 570, "KS": 104.4, "GS": 159.4, "PointsL": []interface{}{197, 151, 16, -91}}
	genericTester(t, feature57(arguments), expected, feature57Names, feature57Accuracies, feature57Types)
}
