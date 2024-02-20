package main

import "math"

func feature43(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "I", "K", "S", "Z", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	I := getParameter(parameters, "I")
	K := getParameter(parameters, "K")
	R := D/2.0 + I
	S := 2.0 * math.Pi * R / 200.0
	result["SS"] = S
	S = getParameter(parameters, "S")
	Z := getParameter(parameters, "Z")
	Rad := math.Pi / 180.0
	r := D / 2.0
	R = D/2.0 + I
	P := math.Pi / 180.0
	E := math.Asin((K/2)/R) / Rad
	F := 180.0 - 2.0*E
	theta := math.Atan(math.Pi/S) / Rad
	result["L"] = []interface{}{
		R * P * F,
		R * P * F / 60.0,
	}
	T := getParameter(parameters, "T")
	result["S"] = R * P * F / T
	result["LL"] = R * P * F
	p := make([]interface{}, 0)
	for X := 0.0; X <= T/2.0; X += 1.0 {
		Q := (R*math.Sin((E+X*(F/T))*Rad))*math.Tan(theta*Rad) + Z
		p = append(p, Q)
	}
	result["Points"] = p
	result["Area"] = 4.0 * math.Pi * math.Pow(R, 2.0) * (1.0 / math.Pow(10.0, 6.0))
	result["VL"] = ((4.0/3.0)*math.Pi*math.Pow(R, 3) - (4.0/3.0)*math.Pi*math.Pow(r, 3)) * (1.0 / math.Pow(10.0, 6.0))
	return result
}
