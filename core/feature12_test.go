package main

import (
	"testing"
)

func feature12Tester(t *testing.T, kk, gg, ll, ss, ee, tt, ett float64, krOK, grOK, kcOK, gcOK, okrOK, ogrOK, zmksOK, zmgsOK, wllOK, ddsOK []float64, aOK float64) {
	kr, gr, kc, gc, okr, ogr, zmks, zmgs, wll, dds, a := feature12(kk, gg, ll, ss, ee, tt, ett)
	if !equalsFormattedArray(kr, krOK, "%.0f") {
		t.Errorf("The value 'kr' is incorrect (got: %v, expected: %v)!", kr, krOK)
	}
	if !equalsFormattedArray(gr, grOK, "%.0f") {
		t.Errorf("The value 'gr' is incorrect (got: %v, expected: %v)!", gr, grOK)
	}
	if !equalsFormattedArray(kc, kcOK, "%.0f") {
		t.Errorf("The value 'kc' is incorrect (got: %v, expected: %v)!", kc, kcOK)
	}
	if !equalsFormattedArray(gc, gcOK, "%.0f") {
		t.Errorf("The value 'gc' is incorrect (got: %v, expected: %v)!", gc, gcOK)
	}
	if !equalsFormattedArray(okr, okrOK, "%.0f") {
		t.Errorf("The value 'okr' is incorrect (got: %v, expected: %v)!", okr, okrOK)
	}
	if !equalsFormattedArray(ogr, ogrOK, "%.0f") {
		t.Errorf("The value 'ogr' is incorrect (got: %v, expected: %v)!", ogr, ogrOK)
	}
	if !equalsFormattedArray(zmks, zmksOK, "%.1f") {
		t.Errorf("The value 'zmks' is incorrect (got: %v, expected: %v)!", zmks, zmksOK)
	}
	if !equalsFormattedArray(zmgs, zmgsOK, "%.1f") {
		t.Errorf("The value 'zmgs' is incorrect (got: %v, expected: %v)!", zmks, zmgsOK)
	}
	if !equalsFormattedArray(wll, wll, "%.1f") {
		t.Errorf("The value 'wll' is incorrect (got: %v, expected: %v)!", wll, wllOK)
	}
	if !equalsFormattedArray(dds, ddsOK, "%.1f") {
		t.Errorf("The value 'dds' is incorrect (got: %v, expected: %v)!", dds, ddsOK)
	}
	if !equalsFormatted(a, aOK, "%.2f") {
		t.Errorf("The value 'a' is incorrect (got: %v, expected: %v)!", a, aOK)
	}
}

func Test01Feature12(t *testing.T) {
	feature12Tester(t, 200, 400, 100, 5, 10, 16, 20, []float64{141, 168, 194, 220, 247}, []float64{178, 204, 230, 257, 283}, []float64{39, 46, 54, 61, 68}, []float64{49, 56, 64, 71, 78}, []float64{141, 168, 194, 220, 247}, []float64{178, 204, 230, 257, 283}, []float64{31.4, 37.2, 43.0, 48.8, 54.7}, []float64{39.4, 45.2, 51.0, 56.9, 62.7}, []float64{36.3, 36.3, 36.3, 36.3, 36.3}, []float64{50.5, 54.8, 59.3, 64.0, 68.9}, 0.13)
}
