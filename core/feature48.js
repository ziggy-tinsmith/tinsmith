package main

import "math"

func feature48(arguments map[string]interface{}) map[string]interface{} {
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
	I := math.Asin(V/L) / Rad
	result["S"] = 2.0 * math.Pi * r / T
	result["F1"] = math.Sqrt(math.Pow(M-V-r*math.Cos(I*Rad), 2.0) + math.Pow(L*math.Cos(I*Rad)-r*math.Sin(I*Rad), 2.0))
	pa := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M-(V+r*math.Cos(I*Rad)*math.Cos(F*Rad)), 2.0) + math.Pow(N-r*math.Sin(F*Rad), 2.0) + math.Pow(L*math.Cos(I*Rad)-r*math.Sin(I*Rad)*math.Cos(F*Rad), 2.0))
		pa = append(pa, Q)
	}
	result["PointsA"] = pa
	pb := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M+V+r*math.Cos(I*Rad)*math.Cos((90.0+F)*Rad), 2.0) + math.Pow(N-r*math.Sin((90.0+F)*Rad), 2.0) + math.Pow(L*math.Cos(I*Rad)-r*math.Sin(I*Rad)*math.Cos((90.0+F)*Rad), 2.0))
		pb = append(pb, Q)
	}
	result["PointsB"] = pb
	result["F2"] = math.Sqrt(math.Pow(M+V-r*math.Cos(I*Rad), 2.0) + math.Pow(L*math.Cos(I*Rad)+r*math.Sin(I*Rad), 2.0))
	pm := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := (A / (A + 2.0*(V+r*math.Cos(I*Rad)*math.Cos((90.0+F)*Rad)))) * math.Sqrt(math.Pow(M+V+r*math.Cos(I*Rad)*math.Cos((90.0+F)*Rad), 2.0)+math.Pow(N-r*math.Sin((90.0+F)*Rad), 2.0)+math.Pow(L*math.Cos(I*Rad)-r*math.Sin(I*Rad)*math.Cos((90.0+F)*Rad), 2.0))
		pm = append(pm, Q)
	}
	result["PointsM"] = pm
	return result
}
