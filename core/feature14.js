package main

import (
	"math"
)

func feature14(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "Z", "T"})
	if parameters == nil {
		return nil
	}
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	Z := getParameter(parameters, "Z")
	T := getParameter(parameters, "T")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	r := K / 2.0
	R := G / 2.0
	theta := math.Atan((R-r)/L) / Rad
	N := r - Z*math.Sin(theta*Rad)
	M := R + Z*math.Sin(theta*Rad)
	P := 2.0 * Z * math.Cos(theta*Rad)
	L = L + P
	V := M - N
	I := N / M
	C := M / V
	result["SC"] = 2.0 * N * math.Pi / T
	result["BC"] = 2.0 * M * math.Pi / T
	r2 := make([]interface{}, 0)
	for X := float64(0.0); X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := I * C * math.Sqrt(math.Pow(V, 2.0)+math.Pow(L, 2.0)+math.Pow(V, 2.0)+2.0*math.Pow(V, 2.0)*math.Cos(F*Rad))
		r2 = append(r2, Q)
	}
	result["R2"] = r2
	r1 := make([]interface{}, 0)
	for X := float64(0.0); X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := C * math.Sqrt(math.Pow(V, 2.0)+math.Pow(L, 2.0)+math.Pow(V, 2.0)+2.0*math.Pow(V, 2.0)*math.Cos(F*Rad))
		r1 = append(r1, Q)
	}
	result["R1"] = r1
	l1 := make([]interface{}, 0)
	l2 := make([]interface{}, 0)
	l1 = append(l1, math.Sqrt(math.Pow(M-N+V, 2.0)+math.Pow(L, 2.0)))
	for X := float64(1.0); X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		O := 360.0 / T
		E := F - O
		Q := math.Sqrt(math.Pow(M*math.Cos(F*Rad)-N*math.Cos(E*Rad)+V, 2.0) + math.Pow(M*math.Sin(F*Rad)-N*math.Sin(E*Rad), 2.0) + math.Pow(L, 2.0))
		l2 = append(l2, Q)
		Q = math.Sqrt(math.Pow(M*math.Cos(F*Rad)-N*math.Cos(F*Rad)+V, 2.0) + math.Pow(M*math.Sin(F*Rad)-N*math.Sin(F*Rad), 2.0) + math.Pow(L, 2.0))
		l1 = append(l1, Q)
	}
	result["L1"] = l1
	result["L2"] = l2
	W := math.Atan(V/L) / Rad
	result["Area"] = (R + r) * math.Pi * L * (1.0 / math.Cos(W*Rad)) * (1.0 / math.Pow(10.0, 6.0))
	return result
}
