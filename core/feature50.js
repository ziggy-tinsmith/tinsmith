package main

import "math"

func feature50(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "H", "S", "A", "E", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	H := getParameter(parameters, "H")
	S := getParameter(parameters, "S")
	A := getParameter(parameters, "A")
	E := getParameter(parameters, "E")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	r := K / 2.0
	R := G / 2.0
	theta := math.Atan((R-r)/H) / Rad
	L := H + 2.0*(S-1.0)*E*math.Cos(theta*Rad)
	B := math.Atan((R-r)/L) / Rad
	U := 1.0 / math.Sin(B*Rad)
	V := (180.0 / T) * math.Sin(B*Rad)
	C := (R - r) / S
	W := 1.0 / math.Tan(B*Rad)
	O := A / (2.0 * (S - 1.0))
	I := math.Tan(O*Rad) * math.Sin(B*Rad)
	// //"%.0f"
	result["SR"] = r * U
	result["BR"] = R * U
	// "%.1f"
	result["KS"] = 2.0 * r * U * math.Sin(V*Rad)
	result["GS"] = 2.0 * R * U * math.Sin(V*Rad)
	//"%.0f"
	d := make([]interface{}, 0)
	pr1 := make([]interface{}, 0)
	pr2 := make([]interface{}, 0)
	pr3 := make([]interface{}, 0)
	pr4 := make([]interface{}, 0)
	pr5 := make([]interface{}, 0)
	pr6 := make([]interface{}, 0)
	defer func(result map[string]interface{}) {
		result["D"] = d
		result["PointsR1"] = pr1
		result["PointsR2"] = pr2
		result["PointsR3"] = pr3
		result["PointsR4"] = pr4
		result["PointsR5"] = pr5
		result["PointsR6"] = pr6
	}(result)
	d = append(d, 2.0*r)
	d = append(d, 2.0*(r+1.0*C))
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := (r + 1.0*C) * W / (math.Cos(B*Rad) + I*math.Cos(F*Rad))
		pr1 = append(pr1, Q)
	}
	if S == 2.0 {
		return result
	}
	d = append(d, 2.0*(r+2.0*C))
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := (r + 2.0*C) * W / (math.Cos(B*Rad) + I*math.Cos((180.0+F)*Rad))
		pr2 = append(pr2, Q)
	}
	if S == 3.0 {
		return result
	}
	d = append(d, 2.0*(r+3.0*C))
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := (r + 3.0*C) * W / (math.Cos(B*Rad) + I*math.Cos(F*Rad))
		pr3 = append(pr3, Q)
	}
	if S == 4.0 {
		return result
	}
	d = append(d, 2.0*(r+4.0*C))
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := (r + 4.0*C) * W / (math.Cos(B*Rad) + I*math.Cos((180.0+F)*Rad))
		pr4 = append(pr4, Q)
	}
	if S == 5.0 {
		return result
	}
	d = append(d, 2.0*(r+5.0*C))
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := (r + 5.0*C) * W / (math.Cos(B*Rad) + I*math.Cos(F*Rad))
		pr5 = append(pr5, Q)
	}
	if S == 6.0 {
		return result
	}
	d = append(d, 2.0*(r+6.0*C))
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := (r + 6.0*C) * W / (math.Cos(B*Rad) + I*math.Cos((180.0+F)*Rad))
		pr6 = append(pr6, Q)
	}
	return result
}
