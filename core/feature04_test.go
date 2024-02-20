package main

import (
	"testing"
)

func feature04Tester(t *testing.T, aa float64, mmOK float64) {
	mm := feature04(aa)
	if !equalsFormatted(mm, mmOK, "%.0f") {
		t.Errorf("The value 'mm' is incorrect (got: %v, expected: %v)!", mm, mmOK)
	}
}

func Test01Feature04(t *testing.T) {
	feature04Tester(t, 40, 773)
}
