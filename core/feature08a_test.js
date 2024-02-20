package main

import (
	"testing"
)

var (
	feature08ANames      = []string{"GB"}
	feature08AAccuracies = []string{"%.0f"}
	feature08ATypes      = []bool{true}
)

func Test01Feature08A(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "I": 90, "K": 10}
	expected := map[string]interface{}{"GB": 19}
	genericTester(t, feature08A(arguments), expected, feature08ANames, feature08AAccuracies, feature08ATypes)
}
