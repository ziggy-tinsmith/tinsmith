package main

import (
	"testing"
)

func feature05Tester(t *testing.T, dd, rr, ss, aa, ee, tt float64, sOK, ll1OK, ll2OK float64, pOK []float64, dttOK, aOK float64) {
	s, ll1, ll2, p, dtt, a := feature05(dd, rr, ss, aa, ee, tt)
	if !equalsFormatted(s, sOK, "%.1f") {
		t.Errorf("The value 's' is incorrect (got: %v, expected: %v)!", s, sOK)
	}
	if !equalsFormatted(ll1, ll1OK, "%.0f") {
		t.Errorf("The value 'll1' is incorrect (got: %v, expected: %v)!", ll1, ll1OK)
	}
	if !equalsFormatted(ll2, ll2OK, "%.0f") {
		t.Errorf("The value 'll2' is incorrect (got: %v, expected: %v)!", ll2, ll2OK)
	}
	if !equalsFormattedArray(p, pOK, "%.0f") {
		t.Errorf("The value 'p' is incorrect (got: %v, expected: %v)!", p, pOK)
	}
	if !equalsFormatted(dtt, dttOK, "%.0f") {
		t.Errorf("The value 'dtt' is incorrect (got: %v, expected: %v)!", dtt, dttOK)
	}
	if !equalsFormatted(a, aOK, "%.2f") {
		t.Errorf("The value 'a' is incorrect (got: %v, expected: %v)!", a, aOK)
	}
}

func Test01Feature05(t *testing.T) {
	feature05Tester(t, 200, 500, 5, 90, 10, 12, 52.4, 628, 658, []float64{73, 75, 81, 89, 97, 103, 105}, 500, 0.49)
}

func Test02Feature05(t *testing.T) {
	feature05Tester(t, 400, 600, 8, 90, 20, 16, 78.5, 1257, 1297, []float64{59, 61, 65, 72, 79, 87, 93, 97, 99}, 600, 1.18)
}
