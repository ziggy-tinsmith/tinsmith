package main

import (
	"testing"
)

var (
	feature09BNames      = []string{"F", "R", "D", "T", "L", "L1", "L2", "L3"}
	feature09BAccuracies = []string{"%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature09BTypes      = []bool{false, false, false, true, false, false, false, false}
)

func Test01Feature09B(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "A": 90}
	expected := map[string]interface{}{"F": []interface{}{99, 199}, "R": []interface{}{147, 294}, "D": []interface{}{48, 95}, "T": 10, "L": []interface{}{533, 563}, "L1": []interface{}{110, 140}, "L2": []interface{}{267, 297}, "L3": []interface{}{424, 454}}
	genericTester(t, feature09B(arguments), expected, feature09BNames, feature09BAccuracies, feature09BTypes)
}

func Test02Feature09B(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "A": 60}
	expected := map[string]interface{}{"F": []interface{}{143, 286}, "R": []interface{}{159, 318}, "D": []interface{}{16, 33}, "T": 155, "L": []interface{}{1224, 1264}, "L1": []interface{}{298, 338}, "L2": []interface{}{612, 652}, "L3": []interface{}{926, 966}}
	genericTester(t, feature09B(arguments), expected, feature09BNames, feature09BAccuracies, feature09BTypes)
}
