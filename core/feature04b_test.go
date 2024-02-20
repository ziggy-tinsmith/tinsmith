package main

import (
	"testing"
)

var (
	feature04BNames      = []string{"A", "B"}
	feature04BAccuracies = []string{"%.0f", "%.0f"}
	feature04BTypes      = []bool{true, true}
)

func Test01Feature04B(t *testing.T) {
	arguments := map[string]interface{}{"M": 773}
	expected := map[string]interface{}{"A": 40, "B": 50}
	genericTester(t, feature04B(arguments), expected, feature04BNames, feature04BAccuracies, feature04BTypes)
}
