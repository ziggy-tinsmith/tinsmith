package main

import "math"

func feature51(arguments map[string]interface{}) map[string]interface{} {
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
	r := K / 2.0
	M := G / 2.0
	R := D / 2.0
	B := math.Atan((M-r)/L) / Rad
	N := r - E*math.Sin(B*Rad)
	W := 1.0 / math.Tan(B*Rad)
	U := 1.0 / math.Sin(B*Rad)
	V := (180.0 / T) * math.Sin(B*Rad)
	H := M * W
	result["SR"] = N * U
	result["BR"] = M * U
	result["KS"] = 2.0 * N * U * math.Sin(V*Rad)
	result["GS"] = 2.0 * M * U * math.Sin(V*Rad)
	pl := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		A := H*W - math.Sqrt((math.Pow(R, 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(F*Rad), 2.0)+math.Pow(R, 2.0)*math.Pow(W, 2.0))
		P := math.Sin(B*Rad) * (math.Pow(math.Cos(F*Rad), 2.0) + math.Pow(W, 2.0))
		C := N * U
		Q := A/P - C
		pl = append(pl, Q)
	}
	result["PointsL"] = pl
	h := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		A := H*W - math.Sqrt((math.Pow(R, 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(F*Rad), 2.0)+math.Pow(R, 2.0)*math.Pow(W, 2.0))
		P := math.Sin(B*Rad) * (math.Pow(math.Cos(F*Rad), 2.0) + math.Pow(W, 2.0))
		Q := (A / P) * math.Sin(B*Rad) * math.Sin(F*Rad)
		h = append(h, Q)
	}
	result["H"] = h
	b := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		A := H*W - math.Sqrt((math.Pow(R, 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(F*Rad), 2.0)+math.Pow(R, 2.0)*math.Pow(W, 2.0))
		P := math.Sin(B*Rad) * (math.Pow(math.Cos(F*Rad), 2.0) + math.Pow(W, 2.0))
		Q := R * math.Asin(((A/P)/R)*math.Sin(B*Rad)*math.Cos(F*Rad)) * (math.Pi / 180.0) / Rad
		b = append(b, Q)
	}
	result["B"] = b
	return result
}
