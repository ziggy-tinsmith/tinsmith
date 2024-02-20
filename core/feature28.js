package main

import "math"

func feature28(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A", "B", "H", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	B := getParameter(parameters, "B")
	H := getParameter(parameters, "H")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	r := D / 2.0
	M := A / 2.0
	N := B / 2.0
	result["S"] = 2.0 * math.Pi * r / T
	result["F1"] = math.Sqrt(math.Pow(M-r, 2.0) + math.Pow(H, 2.0))
	p := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M-r*math.Cos(F*Rad), 2.0) + math.Pow(N-r*math.Sin(F*Rad), 2.0) + math.Pow(H, 2.0))
		p = append(p, Q)
	}
	result["Points"] = p
	result["F2"] = math.Sqrt(math.Pow(N-r, 2.0) + math.Pow(H, 2.0))
	result["Area"] = (((D*math.Pi/4.0)+B)*math.Sqrt(math.Pow(M-r, 2.0)+math.Pow(H, 2.0)) + ((D*math.Pi/4.0)+A)*math.Sqrt(math.Pow(N-r, 2.0)+math.Pow(H, 2.0))) * (1.0 / math.Pow(10.0, 6.0))
	return result
}
