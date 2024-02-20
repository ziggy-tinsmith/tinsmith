package main

import (
	"testing"
)

func feature10Tester(t *testing.T, kk, gg, ll, ee, tt, ett float64, srOK, brOK, scOK, bcOK, zmksOK, zmgsOK, wllOK, ddOK, aOK float64) {
	sr, br, sc, bc, zmks, zmgs, wll, dd, a := feature10(kk, gg, ll, ee, tt, ett)
	if !equalsFormatted(sr, srOK, "%.0f") {
		t.Errorf("The value 'sr' is incorrect (got: %v, expected: %v)!", sr, srOK)
	}
	if !equalsFormatted(br, brOK, "%.0f") {
		t.Errorf("The value 'br' is incorrect (got: %v, expected: %v)!", br, brOK)
	}
	if !equalsFormatted(sc, scOK, "%.0f") {
		t.Errorf("The value 'sc' is incorrect (got: %v, expected: %v)!", sc, scOK)
	}
	if !equalsFormatted(bc, bcOK, "%.0f") {
		t.Errorf("The value 'bc' is incorrect (got: %v, expected: %v)!", bc, bcOK)
	}
	if !equalsFormatted(zmks, zmksOK, "%.1f") {
		t.Errorf("The value 'zmks' is incorrect (got: %v, expected: %v)!", zmks, zmksOK)
	}
	if !equalsFormatted(zmgs, zmgsOK, "%.1f") {
		t.Errorf("The value 'zmgs' is incorrect (got: %v, expected: %v)!", zmgs, zmgsOK)
	}
	if !equalsFormatted(wll, wllOK, "%.1f") {
		t.Errorf("The value 'wll' is incorrect (got: %v, expected: %v)!", wll, wllOK)
	}
	if !equalsFormatted(dd, ddOK, "%.1f") {
		t.Errorf("The value 'dd' is incorrect (got: %v, expected: %v)!", dd, ddOK)
	}
	if !equalsFormatted(a, aOK, "%.2f") {
		t.Errorf("The value 'a' is incorrect (got: %v, expected: %v)!", a, aOK)
	}
}

func Test01Feature10(t *testing.T) {
	feature10Tester(t, 200, 400, 100, 10, 16, 20, 131, 293, 36, 81, 29.1, 64.9, 161.4, 167.2, 0.13)
}
