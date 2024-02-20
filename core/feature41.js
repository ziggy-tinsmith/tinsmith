package main

import "math"

func feature41(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "G", "I", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	G := getParameter(parameters, "G")
	I := getParameter(parameters, "I")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	R := 0.8*G + 10.0 + I
	P := 0.154*G + 10.0 + I
	Z := G/2.0 + I
	N := Z - P
	M := R - P
	O := math.Asin(N/M) / Rad
	E := 90.0 - O
	H := R - M*math.Cos(O*Rad)
	W := V - r
	A := math.Asin(W/R) / Rad
	K := R - W*(1.0/math.Tan(A*Rad))
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	pbr := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		L := V - r*math.Cos(F*Rad)
		theta := math.Atan(r*math.Sin(F*Rad)/L) / Rad
		C := L * (1.0 / math.Cos(theta*Rad))
		B := math.Asin(C/R) / Rad
		if B > O {
			break
		}
		Q := R - K - R*math.Cos(B*Rad)
		pbr = append(pbr, Q)
	}
	result["PointsBR"] = pbr
	psr := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		L := V + r*math.Cos(F*Rad)
		theta := math.Atan(r*math.Sin(F*Rad)/L) / Rad
		C := L*(1.0/math.Cos(theta*Rad)) - N
		B := math.Acos(C/P) / Rad
		if B > E {
			break
		}
		Q := H - K - P*math.Sin(B*Rad)
		psr = append(psr, Q)
	}
	result["PointsSR"] = psr
	return result
}
