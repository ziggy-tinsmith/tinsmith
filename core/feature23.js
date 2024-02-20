package main

import "math"

func feature23(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "K", "G", "L", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	N := K / 2.0
	M := G / 2.0
	B := math.Atan((M-N)/L) / Rad
	W := 1.0 / math.Tan(B*Rad)
	H := W * (V - r)
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := T / 2.0; X <= T; X += 1.0 {
		F := X * (360.0 / T)
		A := math.Pow(r, 2.0) + math.Pow(V, 2.0) + 2.0*r*V*math.Cos(F*Rad)
		Q := W*math.Sqrt(A) - H
		p = append(p, Q)
	}
	result["Points"] = p
	return result
}
