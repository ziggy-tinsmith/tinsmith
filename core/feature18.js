package main

import "math"

func feature18(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	L := r * math.Tan(A*Rad)
	E := 1.0 / math.Cos(A*Rad)
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := L - r*math.Tan(A*Rad)*math.Cos(F*Rad)
		p = append(p, Q)
	}
	result["Points"] = p
	b := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := r * E * math.Cos(F*Rad)
		b = append(b, Q)
	}
	result["B"] = b
	h := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := r * math.Sin(F*Rad)
		h = append(h, Q)
	}
	result["H"] = h
	return result
}
