package main

import "math"

func feature22(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A", "K", "G", "L", "J", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	J := getParameter(parameters, "J")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	N := K / 2.0
	M := G / 2.0
	B := math.Atan((M-N)/L) / Rad
	Y := 1.0 / math.Tan(B*Rad)
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	A = A + 0.0001
	theta := A - B
	E := N*Y + J
	G = E * math.Tan(B*Rad) * (1.0 / math.Sin(theta*Rad))
	K = r * (1.0 / math.Tan(A*Rad))
	L = G + K
	if A > 90 {
		L = G - K
	}
	p := make([]interface{}, 0)
	for X := 0.0; X <= T; X += 1.0 {
		F := 180.0 - X*(360.0/T)
		W := r*math.Sin(F*Rad) - V
		I := r * (1.0 / math.Tan(theta*Rad)) * math.Cos(F*Rad)
		H := E + r*(1.0/math.Sin(A*Rad))*math.Cos(B*Rad)*math.Cos(F*Rad)
		R := H * math.Tan(B*Rad)
		K := math.Asin(W/R) / Rad
		G := math.Asin(W/M) / Rad
		O := R * math.Cos(K*Rad)
		U := M * math.Cos(G*Rad)
		S := R - O
		P := M*Y - H
		C := math.Atan((U-O)/P) / Rad
		Z := S / (math.Tan(theta*Rad) + math.Tan(C*Rad))
		if V == 0.0 && F < 0.0 {
			break
		}
		Q := L + I - (1.0/math.Sin(theta*Rad))*math.Sqrt(math.Pow(math.Tan(B*Rad), 2.0)*math.Pow(H+Z, 2.0)-math.Pow(W, 2.0))
		p = append(p, Q)
	}
	result["Points"] = p
	return result
}
