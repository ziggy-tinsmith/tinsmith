package main

import (
	"testing"
)

func feature02Tester(t *testing.T, kk, gg, dd float64, rrOK, aaOK float64) {
	rr, aa := feature02(kk, gg, dd)
	if !equalsFormatted(rr, rrOK, "%.0f") {
		t.Errorf("The value 'rr' is incorrect (got: %v, expected: %v)!", rr, rrOK)
	}
	if !equalsFormatted(aa, aaOK, "%.2f") {
		t.Errorf("The value 'aa' is incorrect (got: %v, expected: %v)!", aa, aaOK)
	}
}

func Test01Feature02(t *testing.T) {
	feature02Tester(t, 200, 300, 100, 250, 26.57)
}
