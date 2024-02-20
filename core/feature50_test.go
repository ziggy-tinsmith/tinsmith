package main

import "testing"

var (
	feature50Names      = []string{"SR", "BR", "KS", "GS", "D", "PointsR1", "PointsR2", "PointsR3", "PointsR4", "PointsR5", "PointsR6"}
	feature50Accuracies = []string{"%.0f", "%.0f", "%.1f", "%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature50Types      = []bool{true, true, true, true, false, false, false, false, false, false, false}
)

func Test01feature50(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "H": 100, "S": 6, "A": 45, "E": 10, "T": 6}
	expected := map[string]interface{}{"SR": 392, "BR": 588, "KS": 104.4, "GS": 156.6, "D": []interface{}{200, 217, 233, 250, 267, 283}, "PointsR1": []interface{}{416, 420, 429, 434}, "PointsR2": []interface{}{467, 462, 452, 448}, "PointsR3": []interface{}{480, 485, 495, 500}, "PointsR4": []interface{}{534, 528, 517, 512}, "PointsR5": []interface{}{544, 549, 561, 567}, "PointsR6": []interface{}{}}
	genericTester(t, feature50(arguments), expected, feature50Names, feature50Accuracies, feature50Types)
}

func Test02feature50(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "H": 100, "S": 7, "A": 45, "E": 10, "T": 6}
	expected := map[string]interface{}{"SR": 427, "BR": 640, "KS": 104.5, "GS": 156.7, "D": []interface{}{200, 214, 229, 243, 257, 271, 286}, "PointsR1": []interface{}{450, 453, 461, 464}, "PointsR2": []interface{}{495, 491, 484, 480}, "PointsR3": []interface{}{510, 514, 522, 526}, "PointsR4": []interface{}{557, 553, 544, 540}, "PointsR5": []interface{}{570, 574, 584, 588}, "PointsR6": []interface{}{619, 614, 605, 600}}
	genericTester(t, feature50(arguments), expected, feature50Names, feature50Accuracies, feature50Types)
}
