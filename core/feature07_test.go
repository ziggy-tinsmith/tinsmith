package main

import (
	"testing"
)

func feature07Tester(t *testing.T, dd, aa, ee float64, rr1OK, rr2OK, ccOK, ssOK float64) {
	rr1, rr2, cc, ss := feature07(dd, aa, ee)
	if !equalsFormatted(rr1, rr1OK, "%.0f") {
		t.Errorf("The value 'rr1' is incorrect (got: %v, expected: %v)!", rr1, rr1OK)
	}
	if !equalsFormatted(rr2, rr2OK, "%.0f") {
		t.Errorf("The value 'rr2' is incorrect (got: %v, expected: %v)!", rr2, rr2OK)
	}
	if !equalsFormatted(cc, ccOK, "%.0f") {
		t.Errorf("The value 'cc' is incorrect (got: %v, expected: %v)!", cc, ccOK)
	}
	if !equalsFormatted(ss, ssOK, "%.0f") {
		t.Errorf("The value 'ss' is incorrect (got: %v, expected: %v)!", ss, ssOK)
	}
}

func Test01Feature07(t *testing.T) {
	feature07Tester(t, 200, 90, 10, 135, 145, 189, 194)
}
