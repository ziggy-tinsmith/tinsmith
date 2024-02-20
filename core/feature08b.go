package main

import (
	"math"
)

func feature08B(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "I", "T"})
	if parameters == nil {
		return nil
	}
	D := getParameter(parameters, "D")
	I := getParameter(parameters, "I")
	T := getParameter(parameters, "T")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	R := D / 2.0
	r := R - I
	P := math.Pi / 180.0
	A := 360.0 / T
	result["R2"] = r
	result["R1"] = []interface{}{
		R,
		R + 6.0,
	}
	result["B"] = R * A * P
	result["C"] = 2.0 * R * math.Sin((A/2.0)*Rad)
	return result
}
