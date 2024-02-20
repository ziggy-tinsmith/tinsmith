package main

import "math"

func feature49(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A", "B", "L", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	B := getParameter(parameters, "B")
	L := getParameter(parameters, "L")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	r := D / 2.0
	M := A / 2.0
	N := B / 2.0
	theta := math.Asin(V/L) / Rad
	L = L * math.Cos(theta*Rad)
	result["S"] = 2.0 * math.Pi * r / T
	result["F1"] = math.Sqrt(math.Pow(M-V-r, 2.0) + math.Pow(L, 2.0))
	pa := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M-(V+r*math.Cos(F*Rad)), 2.0) + math.Pow(N-r*math.Sin(F*Rad), 2.0) + math.Pow(L, 2.0))
		pa = append(pa, Q)
	}
	result["PointsA"] = pa
	pb := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := 90.0 + X*(360.0/T)
		Q := math.Sqrt(math.Pow(M+V+r*math.Cos(F*Rad), 2.0) + math.Pow(N-r*math.Sin(F*Rad), 2.0) + math.Pow(L, 2.0))
		pb = append(pb, Q)
	}
	result["PointsB"] = pb
	result["F2"] = math.Sqrt(math.Pow(M+V-r, 2.0) + math.Pow(L, 2.0))
	pm := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := 90.0 + X*(360.0/T)
		Q := (A / (A + 2.0*(V+r*math.Cos(F*Rad)))) * math.Sqrt(math.Pow(M+V+r*math.Cos(F*Rad), 2.0)+math.Pow(N-r*math.Sin(F*Rad), 2.0)+math.Pow(L, 2.0))
		pm = append(pm, Q)
	}
	result["PointsM"] = pm
	return result
}
