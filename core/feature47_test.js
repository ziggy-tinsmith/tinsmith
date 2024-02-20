package main

import "testing"

var (
	feature47Names      = []string{"ZMKS", "ZMGS", "KR", "GR", "RA", "L1", "L2", "M1", "M2"}
	feature47Accuracies = []string{"%.1f", "%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature47Types      = []bool{true, true, false, false, false, false, false, false, false}
)

func Test01feature47(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "L": 200, "V": 200, "T": 6}
	expected := map[string]interface{}{"ZMKS": 104.7, "ZMGS": 157.1, "KR": []interface{}{500, 458, 361, 300}, "GR": []interface{}{750, 687, 541, 450}, "RA": []interface{}{600, 611}, "L1": []interface{}{250, 229, 180, 150}, "L2": []interface{}{218, 87, 132}, "M1": []interface{}{150, 76}, "M2": []interface{}{93}}
	genericTester(t, feature47(arguments), expected, feature47Names, feature47Accuracies, feature47Types)
}
