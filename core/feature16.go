package main

import "math"

func feature16(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "K", "G", "M", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	M := getParameter(parameters, "M")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	R := M / 2.0
	A := math.Atan((G-K)/D) / Rad
	E := 1 / math.Cos(A*Rad)
	J := math.Asin(r*E/R) / Rad
	V := R * math.Cos(J*Rad) * math.Sin(A*Rad)
	W := math.Asin(V/R) / Rad
	P := math.Pi / 180.0
	// "%.f"1
	result["S"] = 2 * math.Pi * r / T
	// "%.f"0
	result["L"] = []interface{}{
		2 * math.Pi * r,
		2*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		C := r*math.Cos(F*Rad) - V
		B := math.Asin(C/R) / Rad
		Q := R - R*math.Cos(B*Rad)
		p = append(p, Q)
	}
	result["Points"] = p
	b := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		C := r*math.Cos(F*Rad) - V
		B := math.Asin(C/R) / Rad
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
