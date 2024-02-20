package main

import "testing"

var (
	feature18Names      = []string{"S", "L", "Points", "B", "H"}
	feature18Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature18Types      = []bool{true, false, false, false, false}
)

func Test01feature18(t *testing.T) {
	arguments := map[string]interface{}{"D": 50, "A": 80, "T": 10}
	expected := map[string]interface{}{"S": 15.7, "L": []interface{}{157, 187}, "Points": []interface{}{0, 27, 98, 186, 256, 284}, "B": []interface{}{144, 116, 44}, "H": []interface{}{0, 15, 24}}
	genericTester(t, feature18(arguments), expected, feature18Names, feature18Accuracies, feature18Types)
}

func Test02feature18(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "A": 70, "T": 8}
	expected := map[string]interface{}{"S": 157.1, "L": []interface{}{1257, 1297}, "Points": []interface{}{0, 161, 549, 938, 1099}, "B": []interface{}{585, 413, 0}, "H": []interface{}{0, 141, 200}}
	genericTester(t, feature18(arguments), expected, feature18Names, feature18Accuracies, feature18Types)
}
