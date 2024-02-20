package main

import (
	"testing"
)

var (
	feature03Names      = []string{"R", "A"}
	feature03Accuracies = []string{"%.0f", "%.2f"}
	feature03Types      = []bool{true, true}
)

func Test01Feature03(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "D": 100}
	expected := map[string]interface{}{"R": 250, "A": 57.30}
	genericTester(t, feature03(arguments), expected, feature02Names, feature02Accuracies, feature02Types)
}
