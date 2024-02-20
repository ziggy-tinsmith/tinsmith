package main

import (
	"fmt"
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
