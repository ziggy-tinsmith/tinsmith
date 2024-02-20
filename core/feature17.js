package main

import "math"

func feature17(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A", "G", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	G := getParameter(parameters, "G")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	R := G / 2.0
	E := 1.0 / math.Sin(A*Rad)
	I := 1.0 / math.Tan(A*Rad)
	L := E*R + I*r
	W := math.Asin(V/R) / Rad
	P := math.Pi / 180.0
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := 0.0; X <= T; X += 1.0 {
		F := X * (360.0 / T)
		N := r * math.Cos(F*Rad)
		C := r*math.Sin(F*Rad) - V
		theta := math.Asin(C/R) / Rad
		if V == 0.0 && F > 180.0 {
			break
		}
		Q := L - I*N - E*R*math.Cos(theta*Rad)
		p = append(p, Q)
	}
	result["Points"] = p
	b := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		C := r*math.Cos(F*Rad) - V
		theta := math.Asin(C/R) / Rad
		if V == 0.0 && F > 90.0 {
			break
		}
		Q := R * (W + theta) * P
		b = append(b, Q)
	}
	result["B"] = b
	h := make([]interface{}, 0)
	for X := 0.0; X <= T; X += 1.0 {
		F := X * (360.0 / T)
		N := r * math.Cos(F*Rad)
		C := r*math.Sin(F*Rad) - V
		theta := math.Asin(C/R) / Rad
		if V == 0.0 && F > 180.0 {
			break
		}
		Q := I*R - E*N - I*R*math.Cos(theta*Rad)
		h = append(h, Q)
	}
	result["H"] = h
	return result
}
