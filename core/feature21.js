package main

import "math"

func feature21(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "K", "G", "L", "A", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	A := getParameter(parameters, "A")
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
	theta := math.Atan((M-N)/L) / Rad
	E := 1.0 / math.Tan(theta*Rad)
	O := 1.0 / math.Cos(theta*Rad)
	H := N*E + A
	C := math.Tan(theta * Rad)
	L = (H + r) * C
	R := H * C
	I := math.Asin(V/R) / Rad
	P := math.Pi / 180.0
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := 0.0; X <= T; X += 1.0 {
		F := 180.0 + X*(360.0/T)
		A := H - r*math.Cos(F*Rad)
		B := r*math.Sin(F*Rad) - V
		if V == 0.0 && F > 360.0 {
			break
		}
		Q := L - math.Sqrt(math.Pow(C, 2.0)*math.Pow(A, 2.0)-math.Pow(B, 2.0))
		p = append(p, Q)
	}
	result["Points"] = p
	b := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		W := r*math.Cos(F*Rad) - V
		Y := math.Asin(W/R) / Rad
		if V == 0.0 && F > 90 {
			break
		}
		Q := R * (I + Y) * P
		b = append(b, Q)
	}
	result["B"] = b
	mh := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := 90.0 + X*(360.0/T)
		A := H - r*math.Cos(F*Rad)
		B := r*math.Sin(F*Rad) - V
		if V == 0.0 && F > 180 {
			break
		}
		Q := H*O - O*math.Sqrt(math.Pow(A, 2.0)+math.Pow(B, 2.0))
		mh = append(mh, Q)
	}
	result["MH"] = mh
	ph := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := 90.0 - X*(360.0/T)
		A := H - r*math.Cos(F*Rad)
		B := r*math.Sin(F*Rad) - V
		if V == 0.0 && F < 0 {
			break
		}
		Q := H*O - O*math.Sqrt(math.Pow(A, 2.0)+math.Pow(B, 2.0))
		ph = append(ph, Q)
	}
	result["PH"] = ph
	return result
}
