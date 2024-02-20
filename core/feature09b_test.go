package main

import (
	"testing"
)

func feature09BTester(t *testing.T, dd, aa float64, ff1OK, ff2OK, rr1OK, rr2OK, dd1OK, dd2OK, ttOK, hll01OK, hll02OK, hll11OK, hll12OK, hll21OK, hll22OK, hll31OK, hll32OK float64) {
	ff1, ff2, rr1, rr2, dd1, dd2, tt, hll01, hll02, hll11, hll12, hll21, hll22, hll31, hll32 := feature09B(dd, aa)
	if !equalsFormatted(ff1, ff1OK, "%.0f") {
		t.Errorf("The value 'ff1' is incorrect (got: %v, expected: %v)!", ff1, ff1OK)
	}
	if !equalsFormatted(ff2, ff2OK, "%.0f") {
		t.Errorf("The value 'ff2' is incorrect (got: %v, expected: %v)!", ff2, ff2OK)
	}
	if !equalsFormatted(rr1, rr1OK, "%.0f") {
		t.Errorf("The value 'rr1' is incorrect (got: %v, expected: %v)!", rr1, rr1OK)
	}
	if !equalsFormatted(rr2, rr2OK, "%.0f") {
		t.Errorf("The value 'rr2' is incorrect (got: %v, expected: %v)!", rr2, rr2OK)
	}
	if !equalsFormatted(ff1, ff1OK, "%.0f") {
		t.Errorf("The value 'dd1' is incorrect (got: %v, expected: %v)!", dd1, dd1OK)
	}
	if !equalsFormatted(dd2, dd2OK, "%.0f") {
		t.Errorf("The value 'dd2' is incorrect (got: %v, expected: %v)!", dd2, dd2OK)
	}
	if !equalsFormatted(tt, ttOK, "%.0f") {
		t.Errorf("The value 'tt' is incorrect (got: %v, expected: %v)!", tt, ttOK)
	}
	if !equalsFormatted(hll01, hll01OK, "%.0f") {
		t.Errorf("The value 'hll01' is incorrect (got: %v, expected: %v)!", hll01, hll01OK)
	}
	if !equalsFormatted(hll02, hll02OK, "%.0f") {
		t.Errorf("The value 'hll02' is incorrect (got: %v, expected: %v)!", hll02, hll02OK)
	}
	if !equalsFormatted(hll11, hll11OK, "%.0f") {
		t.Errorf("The value 'hll11' is incorrect (got: %v, expected: %v)!", hll11, hll11OK)
	}
	if !equalsFormatted(hll12, hll12OK, "%.0f") {
		t.Errorf("The value 'hll12' is incorrect (got: %v, expected: %v)!", hll12, hll12OK)
	}
	if !equalsFormatted(hll21, hll21OK, "%.0f") {
		t.Errorf("The value 'hll21' is incorrect (got: %v, expected: %v)!", hll21, hll21OK)
	}
	if !equalsFormatted(hll22, hll22OK, "%.0f") {
		t.Errorf("The value 'hll22' is incorrect (got: %v, expected: %v)!", hll22, hll22OK)
	}
	if !equalsFormatted(hll31, hll31OK, "%.0f") {
		t.Errorf("The value 'hll31' is incorrect (got: %v, expected: %v)!", hll31, hll31OK)
	}
	if !equalsFormatted(hll32, hll32OK, "%.0f") {
		t.Errorf("The value 'hll32' is incorrect (got: %v, expected: %v)!", hll32, hll32OK)
	}
}

func Test01Feature09B(t *testing.T) {
	feature09BTester(t, 200, 90, 99, 199, 147, 294, 48, 95, 10, 533, 563, 110, 140, 267, 297, 424, 454)
}

func Test02Feature09B(t *testing.T) {
	feature09BTester(t, 400, 60, 143, 286, 159, 318, 16, 33, 155, 1224, 1264, 298, 338, 612, 652, 926, 966)
}
