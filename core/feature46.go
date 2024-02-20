package main

import "math"

func feature46(arguments map[string]interface{}) map[string]interface{} {
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
	B := N * math.Cos(theta*Rad)
	C := N * math.Sin(theta*Rad)
	//"%.1f"
	result["ZMKS"] = K * math.Pi / T
	result["ZMGS"] = G * math.Pi / T
	//"%.0f"
	l1 := make([]interface{}, 0)
	l2 := make([]interface{}, 0)
	l1 = append(l1, math.Sqrt(math.Pow(B-M+V, 2.0)+math.Pow(L-C, 2.0)))
	for X := 1.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		O := 360.0 / T
		E := F - O
		Q := math.Sqrt(math.Pow(B*math.Cos(F*Rad)-M*math.Cos(E*Rad)+V, 2.0) + math.Pow(N*math.Sin(F*Rad)-M*math.Sin(E*Rad), 2.0) + math.Pow(L-C*math.Cos(F*Rad), 2.0))
		l2 = append(l2, Q)
		Q = math.Sqrt(math.Pow(B*math.Cos(F*Rad)-M*math.Cos(F*Rad)+V, 2.0) + math.Pow(N*math.Sin(F*Rad)-M*math.Sin(F*Rad), 2.0) + math.Pow(L-C*math.Cos(F*Rad), 2.0))
		l1 = append(l1, Q)
	}
	result["L1"] = l1
	result["L2"] = l2
	m1 := make([]interface{}, 0)
	m2 := make([]interface{}, 0)
	m1 = append(m1, 0.0)
	for X := (T / 4.0) + 1.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		O := 360.0 / T
		E := F - O
		Q := ((-M * math.Cos(E*Rad)) / (B*math.Cos(F*Rad) - M*math.Cos(E*Rad) + V)) * math.Sqrt(math.Pow(B*math.Cos(F*Rad)-M*math.Cos(E*Rad)+V, 2.0)+math.Pow(N*math.Sin(F*Rad)-M*math.Sin(E*Rad), 2.0)+math.Pow(L-C*math.Cos(F*Rad), 2.0))
		m2 = append(m2, Q)
		Q = ((-M * math.Cos(F*Rad)) / (B*math.Cos(F*Rad) - M*math.Cos(F*Rad) + V)) * math.Sqrt(math.Pow(B*math.Cos(F*Rad)-M*math.Cos(F*Rad)+V, 2.0)+math.Pow(N*math.Sin(F*Rad)-M*math.Sin(F*Rad), 2.0)+math.Pow(L-C*math.Cos(F*Rad), 2.0))
		m1 = append(m1, Q)
	}
	result["M1"] = m1
	result["M2"] = m2
	return result
}
