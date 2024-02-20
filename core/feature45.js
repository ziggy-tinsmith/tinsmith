package main

import "math"

func feature45(arguments map[string]interface{}) map[string]interface{} {
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
	B := math.Asin((M-N)/L) / Rad
	E := math.Asin(V/L) / Rad
	A := math.Atan((math.Cos(B*Rad)*math.Sin(E*Rad))/(1.0+math.Cos(E*Rad)*math.Cos(B*Rad))) / Rad
	I := math.Asin((math.Cos(E*Rad)+math.Cos(B*Rad))/(1.0+math.Cos(E*Rad)*math.Cos(B*Rad))) / Rad
	// F := X * (360.0 / T)
	U := 1.0 / math.Sin(B*Rad)
	W := 180.0 * math.Sin(B*Rad)
	result["KR"] = N * U
	result["GR"] = M * U
	result["ZMKS"] = 2.0 * N * U * math.Sin((W/T)*Rad)
	result["ZMGS"] = 2.0 * M * U * math.Sin((W/T)*Rad)
	pr2 := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := N * (1.0 / math.Tan(B*Rad)) * math.Sin(I*Rad) / (math.Cos(B*Rad) + math.Tan(A*Rad)*math.Sin(B*Rad)*math.Cos(F*Rad))
		pr2 = append(pr2, Q)
	}
	result["PointsR2"] = pr2
	pr1 := make([]interface{}, 0)
	for X := 0.0; X <= (T/4.0)+1.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := M * (1.0 / math.Tan(B*Rad)) * math.Sin(I*Rad) / (math.Cos(B*Rad) + math.Tan(A*Rad)*math.Sin(B*Rad)*math.Cos(F*Rad))
		pr1 = append(pr1, Q)
	}
	result["PointsR1"] = pr1
	pra := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := M * U / (math.Cos(B*Rad) + math.Tan((90.0-E)*Rad)*math.Sin(B*Rad)*math.Cos(F*Rad))
		pra = append(pra, Q)
	}
	result["PointsRA"] = pra
	U = 30.0
	if K > 300.0 {
		U = 40.0
	}
	result["SA"] = 2.0 * math.Pi * M / T
	result["LA"] = []interface{}{
		2.0 * math.Pi * M,
		2.0*math.Pi*M + U,
	}
	L = M * math.Tan(A*Rad)
	pa := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := L - M*math.Tan(A*Rad)*math.Cos(F*Rad)
		pa = append(pa, Q)
	}
	result["PointsA"] = pa
	result["SC"] = 2.0 * math.Pi * N / T
	result["LC"] = []interface{}{
		2.0 * math.Pi * N,
		2.0*math.Pi*N + U,
	}
	L = N * math.Tan(A*Rad)
	p := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := L - N*math.Tan(A*Rad)*math.Cos(F*Rad)
		p = append(p, Q)
	}
	result["Points"] = p
	return result
}
