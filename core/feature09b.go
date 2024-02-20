package main

import (
	"math"
)

func feature09B(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A"})
	if parameters == nil {
		return nil
	}
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	E := math.Acos((r-A)/r) / Rad
	G := r * math.Sin(E*Rad)
	P := math.Pi / 180.0
	B := r * E * P
	result["F"] = []interface{}{
		G,
		2.0 * G,
	}
	result["R"] = []interface{}{
		B,
		2.0 * B,
	}
	result["D"] = []interface{}{
		B - G,
		2.0 * (B - G),
	}
	result["T"] = (1.0/4.0)*D*math.Pi - B
	result["L"] = []interface{}{
		D*math.Pi - 2.0*(B-G),
		D*math.Pi - 2.0*(B-G) + U,
	}
	result["L1"] = []interface{}{
		(1.0/4.0)*D*math.Pi - B + G,
		(1.0/4.0)*D*math.Pi - B + G + U,
	}
	result["L2"] = []interface{}{
		(1.0/2.0)*D*math.Pi - B + G,
		(1.0/2.0)*D*math.Pi - B + G + U,
	}
	result["L3"] = []interface{}{
		(3.0/4.0)*D*math.Pi - B + G,
		(3.0/4.0)*D*math.Pi - B + G + U,
	}
	return result
}
