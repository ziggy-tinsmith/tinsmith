package main

import "math"

func feature29(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A", "B", "H", "V", "W", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	B := getParameter(parameters, "B")
	H := getParameter(parameters, "H")
	V := getParameter(parameters, "V")
	W := getParameter(parameters, "W")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	r := D / 2.0
	M := A / 2.0
	N := B / 2.0
	result["S"] = 2.0 * math.Pi * r / T
	result["F1"] = math.Sqrt(math.Pow(M-V-r, 2.0) + math.Pow(H, 2.0))
	pa := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M-(V+r*math.Cos(F*Rad)), 2.0) + math.Pow(N-(W+r*math.Sin(F*Rad)), 2.0) + math.Pow(H, 2.0))
		pa = append(pa, Q)
	}
	result["PointsA"] = pa
	result["F2"] = math.Sqrt(math.Pow(N-W-r, 2.0) + math.Pow(H, 2.0))
	pb := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M+V+r*math.Cos((90.0+F)*Rad), 2.0) + math.Pow(N-(W+r*math.Sin((90.0+F)*Rad)), 2.0) + math.Pow(H, 2.0))
		pb = append(pb, Q)
	}
	result["PointsB"] = pb
	result["F3"] = math.Sqrt(math.Pow(M+V-r, 2.0) + math.Pow(H, 2.0))
	pc := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M+V+r*math.Cos((180.0+F)*Rad), 2.0) + math.Pow(N+W+r*math.Sin((180.0+F)*Rad), 2.0) + math.Pow(H, 2.0))
		pc = append(pc, Q)
	}
	result["PointsC"] = pc
	result["F4"] = math.Sqrt(math.Pow(N+W-r, 2.0) + math.Pow(H, 2.0))
	pd := make([]interface{}, 0)
	for X := 0.0; X <= T/4.0; X += 1.0 {
		F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(M-(V+r*math.Cos((270.0+F)*Rad)), 2.0) + math.Pow(N+W+r*math.Sin((270.0+F)*Rad), 2.0) + math.Pow(H, 2.0))
		pd = append(pd, Q)
	}
	result["PointsD"] = pd
	result["Area"] = ((A + (D * math.Pi / 4.0)) + (B + (D * math.Pi / 4.0))) * math.Sqrt(math.Pow(H, 2.0)+math.Pow(V, 2.0)+math.Pow(W, 2.0)) * (1.0 / math.Pow(10.0, 6.0))
	return result
}
