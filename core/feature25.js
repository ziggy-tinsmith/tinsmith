package main

import "math"

func feature25(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "D", "E", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	D := getParameter(parameters, "D")
	E := getParameter(parameters, "E")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	N := K / 2.0
	M := G / 2.0
	B := math.Atan((M-N)/L) / Rad
	R := M + E*math.Sin(B*Rad)
	U := 1.0 / math.Sin(B*Rad)
	V := 180.0 * math.Sin(B*Rad)
	H := R * (1.0 / math.Tan(B*Rad))
	r := D / 2.0
	result["KS"] = 2 * N * U * math.Sin((V/T)*Rad)
	result["GS"] = 2 * R * U * math.Sin((V/T)*Rad)
	rk := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		W := math.Acos(R*math.Sin(F*Rad)/r) / Rad
		Q := (N / R) * math.Sqrt(math.Pow(H-(r-r*math.Sin(W*Rad)), 2.0)+math.Pow(R*math.Cos(F*Rad), 2.0)+math.Pow(R*math.Sin(F*Rad), 2.0))
		rk = append(rk, Q)
	}
	result["RK"] = rk
	rg := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		W := math.Acos(R*math.Sin(F*Rad)/r) / Rad
		Q := math.Sqrt(math.Pow(H-(r-r*math.Sin(W*Rad)), 2.0) + math.Pow(R*math.Cos(F*Rad), 2.0) + math.Pow(R*math.Sin(F*Rad), 2.0))
		rg = append(rg, Q)
	}
	result["RG"] = rg
	return result
}
