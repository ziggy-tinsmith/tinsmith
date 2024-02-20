package main

import "math"

func feature30(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A", "B", "K", "G", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	B := getParameter(parameters, "B")
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	r := D / 2.0
	M := A / 2.0
	N := B / 2.0
	E := math.Asin((G-K)/A) / Rad
	result["S"] = 2.0 * math.Pi * r / T
	result["F1"] = math.Sqrt(math.Pow(M*math.Cos(E*Rad)-V*math.Cos(E*Rad)-r, 2.0) + math.Pow(K, 2.0))
	pa := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M*math.Cos(E*Rad)-(V*math.Cos(E*Rad)+r*math.Cos(F*Rad)), 2.0) + math.Pow(N-r*math.Sin(F*Rad), 2.0) + math.Pow(K, 2.0))
		pa = append(pa, Q)
	}
	result["PointsA"] = pa
	pb := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M*math.Cos(E*Rad)+V*math.Cos(E*Rad)+r*math.Cos((90.0+F)*Rad), 2.0) + math.Pow(N-r*math.Sin((90.0+F)*Rad), 2.0) + math.Pow(G, 2.0))
		pb = append(pb, Q)
	}
	result["PointsB"] = pb
	result["F2"] = math.Sqrt(math.Pow(M*math.Cos(E*Rad)+V*math.Cos(E*Rad)-r, 2.0) + math.Pow(G, 2.0))
	result["F3"] = math.Sqrt(math.Pow((K*(1.0/math.Tan(E*Rad))+M*math.Cos(E*Rad)-V*math.Cos(E*Rad))*math.Tan(E*Rad), 2.0) + math.Pow(N-r, 2.0))
	return result
}
