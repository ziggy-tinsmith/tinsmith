package main

import (
	"math"
)

func feature04A(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"A"})
	if parameters == nil {
		return nil
	}
	A := getParameter(parameters, "A")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	C := 400.0
	B := A / 2.0
	N := C * math.Cos(B*Rad)
	W := 8.0 * math.Sin(B*Rad)
	result["M"] = C + N - W
	return result
}
