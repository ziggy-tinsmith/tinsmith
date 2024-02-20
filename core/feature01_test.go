package main

import (
	"fmt"
	"testing"
)

func equalsFormatted(value1, value2 float64, format string) bool {
	return fmt.Sprintf(format, value1) == fmt.Sprintf(format, value2)
}

func equalsFormattedArray(value1, value2 []float64, format string) bool {
	if len(value1) != len(value2) {
		return false
	}
	for i := 0; i < len(value1); i++ {
		if !equalsFormatted(value1[i], value1[i], format) {
			return false
		}
	}
	return true
}

func feature01Tester(t *testing.T, dd, rr, ss, ee, tt float64, coOK, c1OK, c2OK float64, pointsOK []float64, areaOK float64) {
	co, c1, c2, points, area := feature01(dd, rr, ss, ee, tt)
	if !equalsFormatted(co, coOK, "%.1f") {
		t.Errorf("The value 'co' is incorrect (got: %v, expected: %v)!", co, coOK)
	}
	if !equalsFormatted(c1, c1OK, "%.0f") {
		t.Errorf("The value 'c1' is incorrect (got: %v, expected: %v)!", c1, c1OK)
	}
	if !equalsFormatted(c2, c2OK, "%.0f") {
		t.Errorf("The value 'c2' is incorrect (got: %v, expected: %v)!", c2, c2OK)
	}
	if !equalsFormattedArray(points, pointsOK, "%.0f") {
		t.Errorf("The value 'points' is incorrect (got: %v, expected: %v)!", points, pointsOK)
	}
	if !equalsFormatted(area, areaOK, "%.2f") {
		t.Errorf("The value 'area' is incorrect (got: %v, expected: %v)!", area, areaOK)
	}
}

func Test01Feature01(t *testing.T) {
	feature01Tester(t, 200, 500, 5, 10, 12, 52.4, 628, 658, []float64{73, 75, 81, 89, 97, 103, 105}, 0.49)
}

func Test02Feature01(t *testing.T) {
	feature01Tester(t, 400, 600, 8, 20, 16, 78.5, 1257, 1297, []float64{59, 61, 65, 72, 79, 89, 93, 97, 99}, 1.18)
}
