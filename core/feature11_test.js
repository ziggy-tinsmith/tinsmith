package main

import (
	"testing"
)

var (
	feature11Names      = []string{"KR", "GR", "KC", "GC", "OKR", "OGR", "ZMKS", "ZMGS", "WLL", "D", "Area"}
	feature11Accuracies = []string{"%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.1f", "%.1f", "%.1f", "%.1f", "%.2f"}
	feature11Types      = []bool{false, false, false, false, false, false, false, false, false, false, true}
)

func Test01Feature11(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 400, "L": 100, "S": 5, "E": 10, "T": 16, "ET": 20}
	expected := map[string]interface{}{"KR": []interface{}{141, 168, 194, 220, 247}, "GR": []interface{}{178, 204, 230, 257, 283}, "KC": []interface{}{39, 46, 54, 61, 68}, "GC": []interface{}{49, 56, 64, 71, 78}, "OKR": []interface{}{141, 168, 194, 220, 247}, "OGR": []interface{}{178, 204, 230, 257, 283}, "ZMKS": []interface{}{31.4, 37.2, 43.0, 48.8, 54.7}, "ZMGS": []interface{}{39.4, 45.2, 51.0, 56.9, 62.7}, "WLL": []interface{}{36.3, 36.3, 36.3, 36.3, 36.3}, "D": []interface{}{50.5, 54.8, 59.3, 64.0, 68.9}, "Area": 0.13}
	genericTester(t, feature11(arguments), expected, feature11Names, feature11Accuracies, feature11Types)
}
