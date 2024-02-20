package main

import "testing"

var (
	feature53Names      = []string{"SR", "BR", "KS", "GS", "PointsL"}
	feature53Accuracies = []string{"%.0f", "%.0f", "%.1f", "%.1f", "%.0f"}
	feature53Types      = []bool{true, true, true, true, false, false, false}
)

func Test01feature53(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "L": 200, "A": 60, "D": 350, "T": 6}
	expected := map[string]interface{}{"SR": 412, "BR": 618, "KS": 104.4, "GS": 156.7, "PointsL": []interface{}{67, 71, -5, -54}}
	genericTester(t, feature53(arguments), expected, feature53Names, feature53Accuracies, feature53Types)
}
