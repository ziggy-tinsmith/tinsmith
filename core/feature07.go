package main

import (
	"math"
)

func feature07(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A", "E"})
	if parameters == nil {
		return nil
	}
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	E := getParameter(parameters, "E")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	r := D / 2.0
	B := math.Atan(r/A) / Rad
	U := 1.0 / math.Sin(B*Rad)
	V := 180.0 * math.Sin(B*Rad)
	result["Radius"] = []interface{}{
		r * U,
		r*U + E,
	}
	result["C"] = 2.0 * r * U * math.Sin((V/3.0)*Rad)
	result["S"] = 2.0 * r * U * math.Sin(V*Rad)
	return result
}
