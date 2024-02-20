package main

import (
	"testing"
)

func feature06Tester(t *testing.T, dd, aa, tt float64, ssOK, ll1OK, ll2OK float64, pOK []float64) {
	ss, ll1, ll2, p := feature06(dd, aa, tt)
	if !equalsFormatted(ss, ssOK, "%.1f") {
		t.Errorf("The value 'ss' is incorrect (got: %v, expected: %v)!", ss, ssOK)
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
}

func Test01Feature06(t *testing.T) {
	feature06Tester(t, 200, 90, 12, 52.4, 628, 658, []float64{0, 13, 50, 100, 150, 187, 200})
}

func Test02Feature06(t *testing.T) {
	feature06Tester(t, 400, 90, 16, 78.5, 1257, 1297, []float64{0, 15, 59, 123, 200, 277, 341, 385, 400})
}
