package main

import "math"

func feature20(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "G", "R", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	G := getParameter(parameters, "G")
	R := getParameter(parameters, "R")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	M := G / 2.0
	//"%.f"1
	result["S"] = 2.0 * math.Pi * r / T
	// "%.f"0
	result["L"] = []interface{}{
		2.0 * math.Pi * r,
		2.0*math.Pi*r + U,
	}
	p := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		F := X * (360.0 / T)
		C := math.Sqrt(math.Pow(r, 2.0)*math.Pow(math.Sin(F*Rad), 2.0) + math.Pow(R+V-r*math.Cos(F*Rad), 2.0))
		Q := M - M*math.Cos(math.Asin((R-C)/M))
		p = append(p, Q)
	}
	result["Points"] = p
	return result
}
