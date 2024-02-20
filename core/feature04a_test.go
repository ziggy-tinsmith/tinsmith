package main

import (
	"testing"
)

func feature04ATester(t *testing.T, aa float64, mmOK float64) {
	mm := feature04A(aa)
	if !equalsFormatted(mm, mmOK, "%.0f") {
		t.Errorf("The value 'mm' is incorrect (got: %v, expected: %v)!", mm, mmOK)
	}
}

func Test01Feature04A(t *testing.T) {
	feature04ATester(t, 40, 773)
}
