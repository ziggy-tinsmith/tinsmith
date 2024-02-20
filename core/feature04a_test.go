package main

import (
	"testing"
)

var (
	feature04ANames      = []string{"M"}
	feature04AAccuracies = []string{"%.0f"}
	feature04ATypes      = []bool{true}
)

func Test01Feature04A(t *testing.T) {
	arguments := map[string]interface{}{"A": 40}
	expected := map[string]interface{}{"M": 773}
	genericTester(t, feature04A(arguments), expected, feature04ANames, feature04AAccuracies, feature04ATypes)
}
