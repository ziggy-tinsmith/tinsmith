package main

import (
	"math"
)

func feature04B(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"M"})
	if parameters == nil {
		return nil
	}
	M := getParameter(parameters, "M")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	C := 400.0
	N := M - C
	B := math.Acos(N/C) / Rad
	W := 8.0 * math.Sin(B*Rad)
	A := math.Acos((N+W)/C) / Rad
	result["A"] = 2 * A
	result["B"] = 90 - A
	return result
}
