package main

import "testing"

var (
	feature45Names      = []string{"KR", "GR", "ZMKS", "ZMGS", "PointsR2", "PointsR1", "PointsRA", "SA", "LA", "PointsA", "SC", "LC", "Points"}
	feature45Accuracies = []string{"%.0f", "%.0f", "%.1f", "%.1f", "%.0f", "%.0f", "%.0f", "%.1f", "%.0f", "%.0f", "%.1f", "%.0f", "%.0f"}
	feature45Types      = []bool{true, true, true, true, false, false, false, true, false, false, true, false, false}
)

func Test01feature45(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "L": 200, "V": 200, "T": 6}
	expected := map[string]interface{}{"KR": 400, "GR": 600, "ZMKS": 104.4, "ZMGS": 156.6, "PointsR2": []interface{}{310, 344, 443, 516}, "PointsR1": []interface{}{465, 516, 664}, "PointsRA": []interface{}{620, 620}, "SA": 157.1, "LA": []interface{}{942, 972}, "PointsA": []interface{}{0, 73}, "SC": 104.7, "LC": []interface{}{628, 658}, "Points": []interface{}{0, 48, 145, 194}}
	genericTester(t, feature45(arguments), expected, feature45Names, feature45Accuracies, feature45Types)
}

func Test02feature45(t *testing.T) {
	arguments := map[string]interface{}{"K": 400, "G": 600, "L": 400, "V": 400, "T": 6}
	expected := map[string]interface{}{"KR": 800, "GR": 1200, "ZMKS": 208.8, "ZMGS": 313.3, "PointsR2": []interface{}{620, 689, 885, 1033}, "PointsR1": []interface{}{930, 1033, 1328}, "PointsRA": []interface{}{1239, 1239}, "SA": 314.2, "LA": []interface{}{1885, 1925}, "PointsA": []interface{}{0, 145}, "SC": 209.4, "LC": []interface{}{1257, 1297}, "Points": []interface{}{0, 97, 290, 387}}
	genericTester(t, feature45(arguments), expected, feature45Names, feature45Accuracies, feature45Types)
}
