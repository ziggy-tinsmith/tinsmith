package main

import (
	"testing"
)

func feature03Tester(t *testing.T, kk, gg, dd float64, rrOK, aaOK float64) {
	rr, aa := feature03(kk, gg, dd)
	if !equalsFormatted(rr, rrOK, "%.0f") {
		t.Errorf("The value 'rr' is incorrect (got: %v, expected: %v)!", rr, rrOK)
	}
	if !equalsFormatted(aa, aaOK, "%.2f") {
		t.Errorf("The value 'aa' is incorrect (got: %v, expected: %v)!", aa, aaOK)
	}
}

func Test01Feature03(t *testing.T) {
	feature03Tester(t, 200, 300, 100, 250, 57.30)
}
