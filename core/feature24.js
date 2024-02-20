package main

import "math"

func feature24(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "G", "A", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	G := getParameter(parameters, "G")
	A := getParameter(parameters, "A")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	M := G / 2.0
	// W := math.Asin(r/M) / Rad
	// E := M * math.Cos(W*Rad)
	// B := M - E + A
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p1 := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		R := M + 20.0
		C := r * math.Cos(F*Rad)
		B := math.Asin(C/R) / Rad
		Q := R + A - R*math.Cos(B*Rad)
		p1 = append(p1, Q)
	}
	result["P1"] = p1
	p2 := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		R := M - A
		C := r * math.Cos(F*Rad)
		B := math.Asin(C/R) / Rad
		Q := R - R*math.Cos(B*Rad)
		p2 = append(p2, Q)
	}
	result["P2"] = p2
	return result
}
