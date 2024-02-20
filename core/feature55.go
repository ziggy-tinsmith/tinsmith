package main

import "math"

func feature55(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "A", "E", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	A := getParameter(parameters, "A")
	E := getParameter(parameters, "E")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	r := K / 2.0
	R := G / 2.0
	B := math.Atan((R-r)/L) / Rad
	U := 1.0 / math.Sin(B*Rad)
	N := r - E*math.Sin(B*Rad)
	M := R + E*math.Sin(B*Rad)
	H := R - A
	C := math.Acos(H/R) / Rad
	V := C * math.Sin(B*Rad)
	W := (180.0 - C) * math.Sin(B*Rad)
	// P := math.Pi / 180.0
	result["KR"] = N * U
	result["GR"] = M * U
	result["KC"] = 2.0 * N * U * math.Sin((W/2)*Rad)
	result["GC"] = 2.0 * M * U * math.Sin((W/2)*Rad)
	result["ZMKS"] = 2.0 * N * U * math.Sin((V/T)*Rad)
	result["ZMGS"] = 2.0 * M * U * math.Sin((V/T)*Rad)
	pr := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		Q := H / (math.Sin(B*Rad) * math.Cos(X*(2.0*C/T)*Rad))
		pr = append(pr, Q)
	}
	result["PointsR"] = pr
	result["F"] = []interface{}{
		R * U * math.Sin(V*Rad),
		2.0 * R * U * math.Sin(V*Rad),
	}
	pb := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		Q := (H / (math.Sin(B*Rad) * math.Cos(X*(2.0*C/T)*Rad))) * math.Sin(X*(2.0*V/T)*Rad)
		pb = append(pb, Q)
	}
	result["PointsB"] = pb
	ph := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		Q := R*U*math.Cos(V*Rad) - (H/(math.Sin(B*Rad)*math.Cos(X*(2.0*C/T)*Rad)))*math.Cos(X*(2.0*V/T)*Rad)
		ph = append(ph, Q)
	}
	result["PointsH"] = ph
	return result
}
