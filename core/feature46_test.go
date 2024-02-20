package main

import "testing"

var (
	feature46Names      = []string{"ZMKS", "ZMGS", "L1", "L2", "M1", "M2"}
	feature46Accuracies = []string{"%.1f", "%.0f", "%.0f", "%.0f", "%.0f", "%.0f"}
	feature46Types      = []bool{true, true, false, false, false, false}
)

func Test01feature46(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "L": 200, "V": 200, "T": 6}
	expected := map[string]interface{}{"ZMKS": 104.7, "ZMGS": 157.1, "L1": []interface{}{112, 141, 283, 364}, "L2": []interface{}{112, 141, 320}, "M1": []interface{}{0, 135}, "M2": []interface{}{0}}
	genericTester(t, feature46(arguments), expected, feature46Names, feature46Accuracies, feature46Types)
}
