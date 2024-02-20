package main

import "math"

func feature31(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"A", "B", "H", "D", "R", "S", "Z", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	A := getParameter(parameters, "A")
	B := getParameter(parameters, "B")
	H := getParameter(parameters, "H")
	D := getParameter(parameters, "D")
	R := getParameter(parameters, "R")
	S := getParameter(parameters, "S")
	Z := getParameter(parameters, "Z")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	M := A / 2.0
	N := B / 2.0
	r := D / 2.0
	E := 45.0 / S
	result["S"] = 2.0 * math.Pi * r / T
	result["F1"] = math.Sqrt(math.Pow(M-r, 2.0) + math.Pow(H+(R-r*math.Cos(0.0*Rad))*math.Tan(E*Rad), 2.0))
	pa := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M-r*math.Cos(F*Rad), 2.0) + math.Pow(N-r*math.Sin(F*Rad), 2.0) + math.Pow(H+(R-r*math.Cos(F*Rad))*math.Tan(E*Rad), 2.0))
		pa = append(pa, Q)
	}
	result["PointsA"] = pa
	result["F2"] = math.Sqrt(math.Pow(N-r, 2.0) + math.Pow(H+(R-r*math.Cos(90.0*Rad))*math.Tan(E*Rad), 2.0))
	pb := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M+r*math.Cos((90.0+F)*Rad), 2.0) + math.Pow(N-r*math.Sin((90.0+F)*Rad), 2.0) + math.Pow(H+(R-r*math.Cos((90.0+F)*Rad))*math.Tan(E*Rad), 2.0))
		pb = append(pb, Q)
	}
	result["PointsB"] = pb
	result["F3"] = math.Sqrt(math.Pow(M-r, 2.0) + math.Pow(H+(R-r*math.Cos(180.0*Rad))*math.Tan(E*Rad), 2.0))
	result["OS"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		E := 45.0 / S
		Q := (R-r*math.Cos(F*Rad))*math.Tan(E*Rad) + Z
		p = append(p, Q)
	}
	result["Points"] = p
	return result
}
