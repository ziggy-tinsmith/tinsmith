package main

import (
	"math"
)

func feature06(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A", "T"})
	if parameters == nil {
		return nil
	}
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	T := getParameter(parameters, "T")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	U := float64(30)
	if D > 300 {
		U = 40
	}
	r := D / 2.0
	B := A / 2.0
	L := r * math.Tan(B*Rad)
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := float64(0); X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := L - r*math.Tan(B*Rad)*math.Cos(F*Rad)
		p = append(p, Q)
	}
	result["Points"] = p
	return result
}
