package main

import "math"

func feature26(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "L", "V", "Z", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	L := getParameter(parameters, "L")
	V := getParameter(parameters, "V")
	Z := getParameter(parameters, "Z")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	theta := math.Atan(V/L) / Rad
	r = r - Z*math.Sin(theta*Rad)
	B := 2.0 * Z * math.Sin(theta*Rad)
	V = V + B
	P := 2.0 * Z * math.Cos(theta*Rad)
	L = L + P
	result["S"] = 2.0 * math.Pi * r / (2.0 * T)
	p1 := make([]interface{}, 0)
	p2 := make([]interface{}, 0)
	p1 = append(p1, math.Sqrt(math.Pow(V, 2.0)+math.Pow(L, 2.0)))
	for X := 1.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / (2.0 * T))
		O := 360.0 / (2.0 * T)
		Q := math.Sqrt(math.Pow(r*math.Cos(F*Rad)-r*math.Cos((F-O)*Rad)+V, 2.0) + math.Pow(r*math.Sin(F*Rad)-r*math.Sin((F-O)*Rad), 2.0) + math.Pow(L, 2.0))
		p2 = append(p2, Q)
		Q = math.Sqrt(math.Pow(r*math.Cos(F*Rad)-r*math.Cos(F*Rad)+V, 2.0) + math.Pow(r*math.Sin(F*Rad)-r*math.Sin(F*Rad), 2.0) + math.Pow(L, 2.0))
		p1 = append(p1, Q)
	}
	result["P1"] = p1
	result["P2"] = p2
	result["V"] = V
	result["L"] = L
	result["P1L"] = []interface{}{
		U / 2.0,
		(D/2.0)*math.Pi + U/2.0,
	}
	result["P2L"] = []interface{}{
		(D/4.0)*math.Pi + U/2.0,
		(D/4.0)*math.Pi + U/2.0,
	}
	return result
}
