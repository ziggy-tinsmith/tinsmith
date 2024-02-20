package main

import "testing"

var (
	feature51Names      = []string{"SR", "BR", "KS", "GS", "PointsL", "H", "B"}
	feature51Accuracies = []string{"%.0f", "%.0f", "%.1f", "%.1f", "%.0f", "%.0f", "%.0f"}
	feature51Types      = []bool{true, true, true, true, false, false, false}
)

func Test01feature51(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "L": 180, "D": 310, "E": 10, "T": 6}
	expected := map[string]interface{}{"SR": 364, "BR": 560, "KS": 101.6, "GS": 156.6, "PointsL": []interface{}{101, 46}, "H": []interface{}{0, 95}, "B": []interface{}{144, 56}}
	genericTester(t, feature51(arguments), expected, feature51Names, feature51Accuracies, feature51Types)
}
