package main

import "testing"

var (
	feature52Names      = []string{"SR", "BR", "KS", "GS", "PointsL", "B", "H"}
	feature52Accuracies = []string{"%.0f", "%.0f", "%.1f", "%.1f", "%.0f", "%.0f", "%.0f"}
	feature52Types      = []bool{true, true, true, true, false, false, false}
)

func Test01feature52(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "L": 180, "D": 310, "E": 10, "T": 6}
	expected := map[string]interface{}{"SR": 374, "BR": 570, "KS": 104.4, "GS": 159.4, "PointsL": []interface{}{102, 53}, "B": []interface{}{146, 72}, "H": []interface{}{0, 120}}
	genericTester(t, feature52(arguments), expected, feature52Names, feature52Accuracies, feature52Types)
}
