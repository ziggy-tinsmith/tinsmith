package main

import (
	"testing"
)

func feature08BTester(t *testing.T, dd, ii, tt float64, rr2OK, rr11OK, rr12OK, bbOK, ccOK float64) {
	rr2, rr11, rr12, bb, cc := feature08B(dd, ii, tt)
	if !equalsFormatted(rr2, rr2OK, "%.0f") {
		t.Errorf("The value 'rr2' is incorrect (got: %v, expected: %v)!", rr2, rr2OK)
	}
	if !equalsFormatted(rr11, rr11OK, "%.0f") {
		t.Errorf("The value 'rr11' is incorrect (got: %v, expected: %v)!", rr11, rr11OK)
	}
	if !equalsFormatted(rr12, rr12OK, "%.0f") {
		t.Errorf("The value 'rr12' is incorrect (got: %v, expected: %v)!", rr12, rr12OK)
	}
	if !equalsFormatted(bb, bbOK, "%.0f") {
		t.Errorf("The value 'bb' is incorrect (got: %v, expected: %v)!", bb, bbOK)
	}
	if !equalsFormatted(cc, ccOK, "%.0f") {
		t.Errorf("The value 'cc' is incorrect (got: %v, expected: %v)!", cc, ccOK)
	}
}

func Test01Feature08B(t *testing.T) {
	feature08BTester(t, 200, 10, 16, 90, 100, 106, 39, 39)
}
