package main

import (
	"testing"
)

var (
	feature13Names      = []string{"L", "FK", "FG", "T", "D", "R", "RK", "RG", "CK", "CG"}
	feature13Accuracies = []string{"%.2f", "%.2f", "%.2f", "%.2f", "%.2f", "%.2f", "%.2f", "%.2f", "%.2f", "%.2f"}
	feature13Types      = []bool{true, false, false, true, true, true, true, true, true, true}
)

func Test01Feature13(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 400, "L": 100, "Z": 60, "S": 80, "E": 12}
	expected := map[string]interface{}{"L": 128.06, "FK": []interface{}{91.65, 183.30}, "FG": []interface{}{160.00, 320.00}, "T": 145.16, "D": 282.36, "R": -23.17, "RK": 129.42, "RG": 294.84, "CK": 166.92, "CG": 415.92}
	genericTester(t, feature13(arguments), expected, feature13Names, feature13Accuracies, feature13Types)
}
