package main

import (
	"testing"
)

var (
	feature07Names      = []string{"Radius", "C", "S"}
	feature07Accuracies = []string{"%.0f", "%.0f", "%.0f"}
	feature07Types      = []bool{false, true, true}
)

func Test01Feature07(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "A": 90, "E": 10}
	expected := map[string]interface{}{"Radius": []interface{}{135.0, 145.0}, "C": 189, "S": 194}
	genericTester(t, feature07(arguments), expected, feature07Names, feature07Accuracies, feature07Types)
}
