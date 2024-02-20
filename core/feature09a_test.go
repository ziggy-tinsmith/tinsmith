package main

import (
	"testing"
)

func feature09ATester(t *testing.T, dd, aa, ll, tt float64, ff1OK, ff2OK, hhOK, ssOK float64, pOK []float64, pp1ll1OK, pp1ll2OK, pp2ll1OK, pp2ll2OK float64) {
	ff1, ff2, hh, ss, p, pp1ll1, pp1ll2, pp2ll1, pp2ll2 := feature09A(dd, aa, ll, tt)
	if !equalsFormatted(ff1, ff1OK, "%.0f") {
		t.Errorf("The value 'ff1' is incorrect (got: %v, expected: %v)!", ff1, ff1OK)
	}
	if !equalsFormatted(ff2, ff2OK, "%.0f") {
		t.Errorf("The value 'ff2' is incorrect (got: %v, expected: %v)!", ff2, ff2OK)
	}
	if !equalsFormatted(hh, hhOK, "%.0f") {
		t.Errorf("The value 'hh' is incorrect (got: %v, expected: %v)!", hh, hhOK)
	}
	if !equalsFormatted(ss, ssOK, "%.1f") {
		t.Errorf("The value 'ss' is incorrect (got: %v, expected: %v)!", ss, ssOK)
	}
	if !equalsFormattedArray(p, pOK, "%.0f") {
		t.Errorf("The value 'p' is incorrect (got: %v, expected: %v)!", p, pOK)
	}
	if !equalsFormatted(pp1ll1, pp1ll1OK, "%.0f") {
		t.Errorf("The value 'pp1ll1' is incorrect (got: %v, expected: %v)!", pp1ll1, pp1ll1OK)
	}
	if !equalsFormatted(pp1ll2, pp1ll2OK, "%.0f") {
		t.Errorf("The value 'pp1ll2' is incorrect (got: %v, expected: %v)!", pp1ll2, pp1ll2OK)
	}
	if !equalsFormatted(pp2ll1, pp2ll1OK, "%.0f") {
		t.Errorf("The value 'pp2ll1' is incorrect (got: %v, expected: %v)!", pp2ll1, pp2ll1OK)
	}
	if !equalsFormatted(pp2ll2, pp2ll2OK, "%.0f") {
		t.Errorf("The value 'pp2ll2' is incorrect (got: %v, expected: %v)!", pp2ll2, pp2ll2OK)
	}
}

func Test01Feature09A(t *testing.T) {
	feature09ATester(t, 200, 90, 500, 12, 99, 199, 508, 24.5, []float64{518, 513, 509, 505, 502, 501, 500}, 25, 339, 182, 182)
}

func Test02Feature09A(t *testing.T) {
	feature09ATester(t, 400, 90, 600, 16, 167, 334, 607, 24.7, []float64{629, 623, 617, 612, 608, 605, 602, 601, 600}, 136, 765, 451, 451)
}
