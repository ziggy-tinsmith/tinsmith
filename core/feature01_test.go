package main

import (
	"fmt"
	"testing"
)

func equalsFormatted(value1, value2 float64, format string) bool {
	return fmt.Sprintf(format, value1) == fmt.Sprintf(format, value2)
}

func equalsFormattedArray(value1, value2 []float64, format string) bool {
	if len(value1) != len(value2) {
		return false
	}
	for i := 0; i < len(value1); i++ {
		if !equalsFormatted(value1[i], value1[i], format) {
			return false
		}
	}
	return true
}

func feature01Tester(t *testing.T, dd, rr, ss, ee, tt float64, sOK, ll1OK, ll2OK float64, pOK []float64, aOK float64) {
	s, ll1, ll2, p, a := feature01(dd, rr, ss, ee, tt)
	if !equalsFormatted(s, sOK, "%.1f") {
		t.Errorf("The value 's' is incorrect (got: %v, expected: %v)!", s, sOK)
	}
	if !equalsFormatted(ll1, ll1OK, "%.0f") {
		t.Errorf("The value 'll1' is incorrect (got: %v, expected: %v)!", ll1, ll1OK)
	}
	if !equalsFormatted(ll2, ll2OK, "%.0f") {
		t.Errorf("The value 'll2' is incorrect (got: %v, expected: %v)!", ll2, ll2OK)
	}
	if !equalsFormattedArray(p, pOK, "%.0f") {
		t.Errorf("The value 'p' is incorrect (got: %v, expected: %v)!", p, pOK)
	}
	if !equalsFormatted(a, aOK, "%.2f") {
		t.Errorf("The value 'a' is incorrect (got: %v, expected: %v)!", a, aOK)
	}
}

func Test01Feature01(t *testing.T) {
	feature01Tester(t, 200, 500, 5, 10, 12, 52.4, 628, 658, []float64{73, 75, 81, 89, 97, 103, 105}, 0.49)
}

func Test02Feature01(t *testing.T) {
	feature01Tester(t, 400, 600, 8, 20, 16, 78.5, 1257, 1297, []float64{59, 61, 65, 72, 79, 89, 93, 97, 99}, 1.18)
}
