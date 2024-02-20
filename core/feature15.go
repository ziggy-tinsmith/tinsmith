package main

import "math"

func feature15(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "G", "V", "T"})
	if parameters == nil {
		return nil
	}
	D := getParameter(parameters, "D")
	G := getParameter(parameters, "G")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2
	R := G / 2
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		C := r*math.Cos(F*Rad) - V
		B := math.Asin(C/R) / Rad
		if V == 0 && F > 90.0 {
			break
		}
		Q := R - R*math.Cos(B*Rad)
		p = append(p, Q)
	}
	result["Points"] = p
	W := math.Asin(V/R) / Rad
	P := math.Pi / 180
	b := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		C := r*math.Cos(F*Rad) - V
		B := math.Asin(C/R) / Rad
		if V == 0 && F > 90.0 {
			break
		}
		Q := R * (W + B) * P
		b = append(b, Q)

	}
	result["B"] = b
	h := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		h = append(h, r*math.Sin(F*Rad))
	}
	result["H"] = h
	return result
}
