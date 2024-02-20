package main

import "math"

func feature27(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "V", "Z", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	V := getParameter(parameters, "V")
	Z := getParameter(parameters, "Z")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	r := K / 2.0
	R := G / 2.0
	theta := math.Atan((R-r)/L) / Rad
	N := r - Z*math.Sin(theta*Rad)
	M := R + Z*math.Sin(theta*Rad)
	P := 2.0 * Z * math.Cos(theta*Rad)
	L = L + P
	I := N / M
	W := M - N
	C := M / W
	Y := 2.0 * W * V
	//"%.f"1
	result["KS"] = 2.0 * N * math.Pi / T
	result["GS"] = 2.0 * M * math.Pi / T
	//"%.f"0
	r1 := make([]interface{}, 0)
	r2 := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := I * C * math.Sqrt(math.Pow(V, 2.0)+math.Pow(L, 2.0)+math.Pow(W, 2.0)+Y*math.Cos(F*Rad))
		r2 = append(r2, Q)
	}
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := C * math.Sqrt(math.Pow(V, 2.0)+math.Pow(L, 2.0)+math.Pow(W, 2.0)+Y*math.Cos(F*Rad))
		r1 = append(r1, Q)
	}
	result["R1"] = r1
	result["R2"] = r2
	l1 := make([]interface{}, 0)
	l2 := make([]interface{}, 0)
	l1 = append(l1, math.Sqrt(math.Pow(W+V, 2.0)+math.Pow(L, 2.0)))
	for X := 1.0; X <= T/2.0; X += 1.0 {
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
	return result
}
