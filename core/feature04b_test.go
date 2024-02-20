package main

import (
	"testing"
)

func feature04BTester(t *testing.T, mm float64, aaOK, bbOK float64) {
	aa, bb := feature04B(mm)
	if !equalsFormatted(aa, aaOK, "%.0f") {
		t.Errorf("The value 'aa' is incorrect (got: %v, expected: %v)!", aa, aaOK)
	}
	if !equalsFormatted(bb, bbOK, "%.0f") {
		t.Errorf("The value 'bb' is incorrect (got: %v, expected: %v)!", bb, bbOK)
	}
}

func Test01Feature04B(t *testing.T) {
	feature04BTester(t, 773, 40, 50)
}
