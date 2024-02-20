package main

import (
	"testing"
)

var (
	feature02Names      = []string{"R", "A"}
	feature02Accuracies = []string{"%.0f", "%.2f"}
	feature02Types      = []bool{true, true}
)

func Test01Feature02(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 300, "D": 100}
	expected := map[string]interface{}{"R": 250, "A": 26.57}
	genericTester(t, feature02(arguments), expected, feature02Names, feature02Accuracies, feature02Types)
}
