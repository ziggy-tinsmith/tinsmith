package main

import (
	"math"
)

func feature10(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "E", "T", "ET"})
	if parameters == nil {
		return nil
	}
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	E := getParameter(parameters, "E")
	T := getParameter(parameters, "T")
	ET := getParameter(parameters, "ET")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	r := K / 2.0
	R := G / 2.0
	B := math.Atan((R-r)/L) / Rad
	N := r - E*math.Sin(B*Rad)
	M := R + E*math.Sin(B*Rad)
	U := 1 / math.Sin(B*Rad)
	V := (180.0 / T) * math.Sin(B*Rad)
	result["SR"] = N * U
	result["BR"] = M * U
	result["SC"] = 2.0 * N * U * math.Sin(V*Rad)
	result["BC"] = 2.0 * M * U * math.Sin(V*Rad)
	V = (180.0 / ET) * math.Sin(B*Rad)
	P := M*U - N*U
	H := P * math.Cos(V*Rad)
	A := (M*U + N*U) * math.Sin(V*Rad)
	theta := math.Atan(A/H) / Rad
	result["D"] = H * (1.0 / math.Cos(theta*Rad))
	result["ZMKS"] = 2.0 * N * U * math.Sin(V*Rad)
	result["ZMGS"] = 2.0 * M * U * math.Sin(V*Rad)
	result["WLL"] = P
	result["Area"] = math.Pi * (R + r) * math.Sqrt(math.Pow(L, 2.0)+math.Pow(R-r, 2.0)) * (1.0 / math.Pow(10.0, 6.0))
	return result
}
