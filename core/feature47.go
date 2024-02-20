package main

import "math"

func feature47(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	N := K / 2.0
	M := G / 2.0
	theta := math.Asin(V/L) / Rad
	L = L * math.Cos(theta*Rad)
	W := M - N
	C := M / W
	I := N / M
	Y := 2.0 * V * W
	Z := W + V
	result["ZMKS"] = K * math.Pi / T
	result["ZMGS"] = G * math.Pi / T
	kr := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := I * C * math.Sqrt(math.Pow(V, 2.0)+math.Pow(L, 2.0)+math.Pow(W, 2.0)+Y*math.Cos(F*Rad))
		kr = append(kr, Q)
	}
	result["KR"] = kr
	gr := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := C * math.Sqrt(math.Pow(V, 2.0)+math.Pow(L, 2.0)+math.Pow(W, 2.0)+Y*math.Cos(F*Rad))
		gr = append(gr, Q)
	}
	result["GR"] = gr
	ra := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := C * math.Sqrt(math.Pow(V, 2.0)+math.Pow(L, 2.0)+math.Pow(W, 2.0)+Y*math.Cos(F*Rad)) / (1.0 + (W/V)*math.Cos(F*Rad))
		ra = append(ra, Q)
	}
	result["RA"] = ra
	l1 := make([]interface{}, 0)
	l2 := make([]interface{}, 0)
	l1 = append(l1, math.Sqrt(math.Pow(Z, 2.0)+math.Pow(L, 2.0)))
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
	m1 := make([]interface{}, 0)
	m2 := make([]interface{}, 0)
	m1 = append(m1, (M/Z)*math.Sqrt(math.Pow(Z, 2.0)+math.Pow(L, 2.0)))
	for X := 1.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		O := 360.0 / T
		E := F - O
		Q := (M * math.Cos(F*Rad) / (M*math.Cos(F*Rad) - N*math.Cos(E*Rad) + V)) * math.Sqrt(math.Pow(M*math.Cos(F*Rad)-N*math.Cos(E*Rad)+V, 2.0)+math.Pow(M*math.Sin(F*Rad)-N*math.Sin(E*Rad), 2.0)+math.Pow(L, 2.0))
		m2 = append(m2, Q)
		Q = (M * math.Cos(F*Rad) / (M*math.Cos(F*Rad) - N*math.Cos(F*Rad) + V)) * math.Sqrt(math.Pow(M*math.Cos(F*Rad)-N*math.Cos(F*Rad)+V, 2.0)+math.Pow(M*math.Sin(F*Rad)-N*math.Sin(F*Rad), 2.0)+math.Pow(L, 2.0))
		m1 = append(m1, Q)
	}
	result["M1"] = m1
	result["M2"] = m2
	return result
}
