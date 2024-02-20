package main

import (
	"testing"
)

func feature13Tester(t *testing.T, kk, gg, ll, zz, ss, ee float64, llllOK, ffkk1OK, ffkk2OK, ffgg1OK, ffgg2OK, ottOK, oddOK, orrOK, orrkkOK, orrggOK, occkkOK, occggOK float64) {
	llll, ffkk1, ffkk2, ffgg1, ffgg2, ott, odd, orr, orrkk, orrgg, occkk, occgg := feature13(kk, gg, ll, zz, ss, ee)
	if !equalsFormatted(llll, llllOK, "%.2f") {
		t.Errorf("The value 'llll' is incorrect (got: %v, expected: %v)!", llll, llllOK)
	}
	if !equalsFormatted(ffkk1, ffkk1OK, "%.2f") {
		t.Errorf("The value 'ffkk1' is incorrect (got: %v, expected: %v)!", ffkk1, ffkk1OK)
	}
	if !equalsFormatted(ffkk2, ffkk2OK, "%.2f") {
		t.Errorf("The value 'ffkk2' is incorrect (got: %v, expected: %v)!", ffkk2, ffkk2OK)
	}
	if !equalsFormatted(ffgg1, ffgg1OK, "%.2f") {
		t.Errorf("The value 'ffgg1' is incorrect (got: %v, expected: %v)!", ffgg1, ffgg1OK)
	}
	if !equalsFormatted(ffgg2, ffgg2OK, "%.2f") {
		t.Errorf("The value 'ffgg2' is incorrect (got: %v, expected: %v)!", ffgg2, ffgg2OK)
	}
	if !equalsFormatted(ott, ottOK, "%.2f") {
		t.Errorf("The value 'ott' is incorrect (got: %v, expected: %v)!", ott, ottOK)
	}
	if !equalsFormatted(odd, oddOK, "%.2f") {
		t.Errorf("The value 'odd' is incorrect (got: %v, expected: %v)!", odd, oddOK)
	}
	if !equalsFormatted(orr, orrOK, "%.2f") {
		t.Errorf("The value 'orr' is incorrect (got: %v, expected: %v)!", orr, orrOK)
	}
	if !equalsFormatted(orrkk, orrkkOK, "%.2f") {
		t.Errorf("The value 'orrkk' is incorrect (got: %v, expected: %v)!", orrkk, orrkkOK)
	}
	if !equalsFormatted(orrgg, orrggOK, "%.2f") {
		t.Errorf("The value 'orrgg' is incorrect (got: %v, expected: %v)!", orrgg, orrggOK)
	}
	if !equalsFormatted(occkk, occkkOK, "%.2f") {
		t.Errorf("The value 'occkk' is incorrect (got: %v, expected: %v)!", occkk, occkkOK)
	}
	if !equalsFormatted(occgg, occggOK, "%.2f") {
		t.Errorf("The value 'occgg' is incorrect (got: %v, expected: %v)!", occgg, occggOK)
	}
}

func Test01Feature13(t *testing.T) {
	feature13Tester(t, 200, 400, 100, 60, 80, 12, 128.06, 91.65, 183.30, 160.00, 320.00, 145.16, 282.36, -23.17, 129.42, 294.84, 166.92, 415.92)
}
