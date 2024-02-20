package main

import "math"

func feature52(arguments map[string]interface{}) map[string]interface{} {
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
	R := G / 2.0
	r := D / 2.0
	B := math.Atan((R-N)/L) / Rad
	M := R + E*math.Sin(B*Rad)
	W := 1.0 / math.Tan(B*Rad)
	U := 1.0 / math.Sin(B*Rad)
	V := (180.0 / T) * math.Sin(B*Rad)
	H := N * W
	C := M * U
	P := math.Pi / 180.0
	result["SR"] = N * U
	result["BR"] = M * U
	result["KS"] = 2.0 * N * U * math.Sin(V*Rad)
	result["GS"] = 2.0 * M * U * math.Sin(V*Rad)
	pl := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		A := H*W + math.Sqrt((math.Pow(r, 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(F*Rad), 2.0)+math.Pow(r, 2.0)*math.Pow(W, 2.0))
		O := math.Sin(B*Rad) * (math.Pow(math.Cos(F*Rad), 2.0) + math.Pow(W, 2.0))
		Q := C - A/O
		pl = append(pl, Q)
	}
	result["PointsL"] = pl
	b := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		A := H*W + math.Sqrt((math.Pow(r, 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(F*Rad), 2.0)+math.Pow(r, 2.0)*math.Pow(W, 2.0))
		O := math.Sin(B*Rad) * (math.Pow(math.Cos(F*Rad), 2.0) + math.Pow(W, 2.0))
		Q := r * (math.Asin(((A/O)/r)*math.Sin(B*Rad)*math.Cos(F*Rad)) / Rad) * P
		b = append(b, Q)
	}
	result["B"] = b
	h := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		A := H*W + math.Sqrt((math.Pow(r, 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(F*Rad), 2.0)+math.Pow(r, 2.0)*math.Pow(W, 2.0))
		O := math.Sin(B*Rad) * (math.Pow(math.Cos(F*Rad), 2.0) + math.Pow(W, 2.0))
		Q := (A / O) * math.Sin(B*Rad) * math.Sin(F*Rad)
		h = append(h, Q)
	}
	result["H"] = h
	return result
}
