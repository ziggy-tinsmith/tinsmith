package main

import "math"

func feature44(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "L", "V", "T", "LL"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	L := getParameter(parameters, "L")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	C := math.Asin(V/L) / Rad
	A := C / 2.0
	B := 90.0 - C
	result["S"] = 2.0 * math.Pi * r / T
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	pb := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := L - r*math.Tan(A*Rad)*math.Cos(F*Rad)
		pb = append(pb, Q)
	}
	for X := 1.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := L - r*math.Tan(B*Rad)*math.Cos((90.0-F)*Rad)
		pb = append(pb, Q)
	}
	result["PointsB"] = pb
	L = getParameter(parameters, "LL")
	pa := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := L - r*math.Tan(A*Rad)*math.Cos(F*Rad)
		pa = append(pa, Q)
	}
	result["PointsA"] = pa
	return result
}
