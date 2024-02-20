package main

import (
	"testing"
)

func feature08ATester(t *testing.T, dd, kk, ii float64, ggbbOK float64) {
	ggbb := feature08A(dd, kk, ii)
	if !equalsFormatted(ggbb, ggbbOK, "%.0f") {
		t.Errorf("The value 'ggbb' is incorrect (got: %v, expected: %v)!", ggbb, ggbbOK)
	}
}

func Test01Feature08A(t *testing.T) {
	feature08ATester(t, 200, 90, 10, 19)
}
