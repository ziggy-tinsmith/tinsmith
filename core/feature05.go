package main

import (
	"math"
)

func feature05(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "R", "S", "A", "E", "T"})
	if parameters == nil {
		return nil
	}
	D := getParameter(parameters, "D")
	R := getParameter(parameters, "R")
	S := getParameter(parameters, "S")
	A := getParameter(parameters, "A")
	E := getParameter(parameters, "E")
	T := getParameter(parameters, "T")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	U := float64(30)
	if D > 300 {
		U = 40
	}
	r := D / 2.0
	C := A / 2.0
	B := C / S
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := float64(0); X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := (R-r*math.Cos(F*Rad))*math.Tan((B+E)*Rad) + E
		p = append(p, Q)
	}
	result["Points"] = p
	result["T"] = R * math.Tan(C*Rad)
	result["Area"] = 2.0 * math.Pow(math.Pi, 2) * r * R * (A / 180.0) * (1 / math.Pow(10.0, 6))
	return result
}
