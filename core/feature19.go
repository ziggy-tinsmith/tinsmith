package main

import "math"

func feature19(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "G", "R", "A", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	G := getParameter(parameters, "G")
	R := getParameter(parameters, "R")
	A := getParameter(parameters, "A")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	M := G / 2.0
	N := R + M
	B := math.Asin((A-r)/N) / Rad
	L := N * math.Cos(B*Rad)
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := T; X <= T+T; X += 1.0 {
		F := X * (360.0 / T)
		C := R + M*math.Cos(math.Asin((r*math.Sin(F*Rad)-V)/M))
		Q := L - C*math.Cos(math.Asin((A-r*math.Cos(F*Rad))/C))
		p = append(p, Q)
	}
	result["Points"] = p
	return result
}
