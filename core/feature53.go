package main

import "math"

func feature53(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "A", "D", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	A := getParameter(parameters, "A")
	D := getParameter(parameters, "D")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	r := D / 2.0
	N := K / 2.0
	M := G / 2.0
	B := math.Atan((M-N)/L) / Rad
	V := 1.0 / math.Sin(B*Rad)
	J := 1.0 / math.Tan(B*Rad)
	Z := (180.0 / T) * math.Sin(B*Rad)
	P := L * math.Sin(A*Rad)
	C := math.Atan((M-N)/P) / Rad
	W := 1.0 / math.Tan(C*Rad)
	H := M * W
	result["SR"] = N * V
	result["BR"] = M * V
	result["KS"] = 2.0 * N * V * math.Sin(Z*Rad)
	result["GS"] = 2.0 * M * V * math.Sin(Z*Rad)
	pl := make([]interface{}, 0)
	for X := T / 4.0; X <= T-T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		E := math.Atan(M*math.Sin(F*Rad)/(M*J)) / Rad
		I := math.Atan(M*math.Cos(F*Rad)/(M*J)) / Rad
		S := H - M*math.Cos(A*Rad)*math.Sin(F*Rad)
		theta := math.Atan(M*math.Cos(F*Rad)/S) / Rad
		Y := math.Acos(H*math.Tan(theta*Rad)/M) / Rad
		O := math.Atan(M*math.Sin(Y*Rad)/H) / Rad
		U := math.Atan(M*math.Cos(Y*Rad)/H) / Rad
		Q := (1.0/math.Sin((A-E)*Rad))*(1.0/math.Cos(I*Rad))*((H*W-math.Sqrt((math.Pow(r, 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(Y*Rad), 2.0)+math.Pow(r, 2.0)*math.Pow(W, 2.0)))/(math.Sin(C*Rad)*(math.Pow(math.Cos(Y*Rad), 2.0)+math.Pow(W, 2.0)))*math.Cos(O*Rad)*math.Cos(U*Rad)) - N*V
		pl = append(pl, Q)
	}
	result["PointsL"] = pl
	return result
}
