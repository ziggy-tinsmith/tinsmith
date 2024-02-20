package main

import (
	"math"
)

func feature02(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "D"})
	if parameters == nil {
		return nil
	}
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	D := getParameter(parameters, "D")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	N := K / 2.0
	M := G / 2.0
	B := math.Atan((M-N)/D) / Rad
	U := 1.0 / math.Tan(B*Rad)
	result["R"] = (1.0 / 2.0) * (M + N) * U
	result["A"] = B
	return result
}
