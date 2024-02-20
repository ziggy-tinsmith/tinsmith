package main

import (
	"math"
)

func feature01(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "R", "S", "E", "T"})
	if parameters == nil {
		return nil
	}
	D := getParameter(parameters, "D")
	R := getParameter(parameters, "R")
	S := getParameter(parameters, "S")
	E := getParameter(parameters, "E")
	T := getParameter(parameters, "T")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	U := float64(30)
	if D > 300 {
		U = 40
	}
	r := D / 2.0
	A := 45.0 / S
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := float64(0); X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := (R-r*math.Cos(F*Rad))*math.Tan(A*Rad) + E
		p = append(p, Q)
	}
	result["Points"] = p
	result["Area"] = math.Pow(math.Pi, 2) * r * R * (1 / math.Pow(10.0, 6))
	return result
}
