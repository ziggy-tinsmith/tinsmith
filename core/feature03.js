package main

import (
	"math"
)

func feature03(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "D"})
	if parameters == nil {
		return nil
	}
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	D := getParameter(parameters, "D")
	result := make(map[string]interface{})
	r := D / 2.0
	M := G + K
	N := G - K
	P := math.Pi / 180.0
	result["R"] = r * (M / N)
	result["A"] = N / (D * P)
	return result
}
