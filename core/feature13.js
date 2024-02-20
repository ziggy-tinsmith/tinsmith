package main

import (
	"math"
)

func feature13(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "Z", "S", "E"})
	if parameters == nil {
		return nil
	}
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	Z := getParameter(parameters, "Z")
	S := getParameter(parameters, "S")
	E := getParameter(parameters, "E")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	r := K / 2.0
	R := G / 2.0
	B := math.Atan((R-r)/L) / Rad
	V := 1.0 / math.Sin(B*Rad)
	// J := 1.0 / math.Sin(B*Rad)
	Y := r - Z
	I := R - S
	U := math.Acos(Y/r) / Rad
	O := math.Acos(I/R) / Rad
	A := math.Atan((I-Y)/L) / Rad
	W := 1.0 / math.Cos(A*Rad)
	C := r * math.Sin(U*Rad)
	D := R * math.Sin(O*Rad)
	F := math.Atan((D-C)/(L*W)) / Rad
	T := 1.0 / math.Cos(F*Rad)
	N := r - E*math.Sin(B*Rad)
	M := R + E*math.Sin(B*Rad)
	H := (O - U) * math.Sin(B*Rad)
	P := (180.0 - U) * math.Sin(B*Rad)
	Q := (180.0 - O) * math.Sin(B*Rad)
	result["L"] = L * W
	result["FK"] = []interface{}{
		C,
		2.0 * C,
	}
	result["FG"] = []interface{}{
		D,
		2.0 * D,
	}
	result["T"] = L * W * T
	result["D"] = math.Sqrt(math.Pow(D+C, 2.0) + math.Pow(L*W, 2.0))
	result["R"] = 2.0 * r * V * math.Sin((H/2.0)*Rad)
	result["RK"] = N * V
	result["RG"] = M * V
	result["CK"] = 2.0 * N * V * math.Sin((P/2.0)*Rad)
	result["CG"] = 2.0 * M * V * math.Sin((Q/2.0)*Rad)
	return result
}
