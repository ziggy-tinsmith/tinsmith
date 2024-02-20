package main

import "math"

func feature39(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "G", "I", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	G := getParameter(parameters, "G")
	I := getParameter(parameters, "I")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	R := G + 10.0 + I
	W := V - r
	A := math.Asin(W/R) / Rad
	L := R * math.Cos(A*Rad)
	//"%.1f"
	result["S"] = 2.0 * math.Pi * r / T
	//"%.0f"
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := L - math.Sqrt(math.Pow(R, 2.0)-math.Pow(r, 2.0)-math.Pow(V, 2.0)+D*V*math.Cos(F*Rad))
		p = append(p, Q)
	}
	result["Points"] = p
	return result
}
