package main

import (
	"testing"
)

var (
	feature10Names      = []string{"SR", "BR", "SC", "BC", "ZMKS", "ZMGS", "WLL", "D", "Area"}
	feature10Accuracies = []string{"%.0f", "%.0f", "%.0f", "%.0f", "%.1f", "%.1f", "%.1f", "%.1f", "%.2f"}
	feature10Types      = []bool{true, true, true, true, true, true, true, true, true}
)

func Test01Feature10(t *testing.T) {
	arguments := map[string]interface{}{"K": 200, "G": 400, "L": 100, "E": 10, "T": 16, "ET": 20}
	expected := map[string]interface{}{"SR": 131, "BR": 293, "SC": 36, "BC": 81, "ZMKS": 29.1, "ZMGS": 64.9, "WLL": 161.4, "D": 167.2, "Area": 0.13}
	genericTester(t, feature10(arguments), expected, feature10Names, feature10Accuracies, feature10Types)
}
