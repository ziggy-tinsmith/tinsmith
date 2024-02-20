package main

import "testing"

var (
	feature55Names      = []string{"KR", "GR", "KC", "GC", "ZMKS", "ZMGS", "PointsR", "F", "PointsB", "PointsH"}
	feature55Accuracies = []string{"%.0f", "%.0f", "%.0f", "%.0f", "%.1f", "%.1f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature55Types      = []bool{true, true, true, true, true, true, false, false, false, false, false}
)

func Test01feature55(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "L": 180, "A": 20, "E": 10, "T": 6}
	expected := map[string]interface{}{"KR": 364, "GR": 570, "KC": 250, "GC": 392, "ZMKS": 16.9, "ZMGS": 26.6, "PointsR": []interface{}{486, 493, 517, 560}, "F": []interface{}{78, 156}, "PointsB": []interface{}{0, 23, 48, 78}, "PointsH": []interface{}{69, 62, 40, 0}}
	genericTester(t, feature55(arguments), expected, feature55Names, feature55Accuracies, feature55Types)
}
