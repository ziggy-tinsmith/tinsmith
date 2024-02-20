package main

import "math"

func feature56(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "A", "E", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	A := getParameter(parameters, "A")
	E := getParameter(parameters, "E")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	r := K / 2.0
	M := G / 2.0
	B := math.Atan((M-r)/L) / Rad
	N := r - E*math.Sin(B*Rad)
	W := 1.0 / math.Tan(B*Rad)
	U := 1.0 / math.Sin(B*Rad)
	V := 180.0 * math.Sin(B*Rad)
	result["SR"] = N * U
	result["BR"] = M * U
	result["KS"] = 2.0 * N * U * math.Sin((V/T)*Rad)
	result["GS"] = 2.0 * M * U * math.Sin((V/T)*Rad)
	pl := make([]interface{}, 0)
	for X := T / 2.0; X <= T; X += 1.0 {
		F := X * (360.0 / T)
		Q := M*(W-math.Tan(A*Rad))/(math.Cos(B*Rad)+math.Tan(A*Rad)*math.Sin(B*Rad)*math.Cos(F*Rad)) - N*U
		pl = append(pl, Q)
	}
	result["PointsL"] = pl
	return result
}
