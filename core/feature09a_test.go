package main

import (
	"testing"
)

var (
	feature09ANames      = []string{"F1", "F2", "H", "S", "Points", "P1L", "P2L"}
	feature09AAccuracies = []string{"%.0f", "%.0f", "%.0f", "%.1f", "%.0f", "%.0f", "%.0f"}
	feature09ATypes      = []bool{true, true, true, true, false, false, false}
)

func Test01Feature09A(t *testing.T) {
	arguments := map[string]interface{}{"D": 200, "A": 90, "L": 500, "T": 12}
	expected := map[string]interface{}{"F1": 99, "F2": 199, "H": 508, "S": 24.5, "Points": []interface{}{518, 513, 509, 505, 502, 501, 500}, "P1L": []interface{}{25, 339}, "P2L": []interface{}{182, 182}}
	genericTester(t, feature09A(arguments), expected, feature09ANames, feature09AAccuracies, feature09ATypes)
}

func Test02Feature09A(t *testing.T) {
	arguments := map[string]interface{}{"D": 400, "A": 90, "L": 600, "T": 16}
	expected := map[string]interface{}{"F1": 167, "F2": 334, "H": 607, "S": 24.7, "Points": []interface{}{629, 623, 617, 612, 608, 605, 602, 601, 600}, "P1L": []interface{}{136, 765}, "P2L": []interface{}{451, 451}}
	genericTester(t, feature09A(arguments), expected, feature09ANames, feature09AAccuracies, feature09ATypes)
}
