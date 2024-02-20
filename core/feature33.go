package main

import "math"

func feature33(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "I", "K", "S", "E", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	I := getParameter(parameters, "I")
	K := getParameter(parameters, "K")
	G := D/2.0 + I
	S := D * math.Pi / 400.0

	result["SS"] = S
	S = getParameter(parameters, "S")
	E := getParameter(parameters, "E")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	R := D + 10.0 + I
	G = D/2.0 + I
	O := math.Asin(G/R) / Rad
	C := K / 2.0
	F := math.Asin(C/R) / Rad
	V := O - F
	P := math.Pi / 180.0
	theta := 180.0 / S
	result["S"] = R * V * P / T
	result["CL"] = R*V*P + 7.0
	result["R"] = G*(1.0/math.Cos(O*Rad)) + 7.0
	result["H"] = R - G*(1.0/math.Tan(O*Rad))
	p := make([]interface{}, 0)
	for X := 0.0; X <= T; X += 1.0 {
		Q := (R*math.Sin((F+X*(V/T))*Rad))*math.Tan(theta*Rad) + E
		p = append(p, Q)
	}
	result["Points"] = p
	result["Area"] = 2.0 * math.Pi * (R * math.Sin((O/2.0)*Rad)) * R * O * P * (1.0 / math.Pow(10.0, 6.0))
	V = D + 10.0 + (I / 2.0)
	result["VL"] = 2.0 * math.Pi * (V * math.Sin((O/2.0)*Rad)) * V * O * P * I * (1.0 / math.Pow(10.0, 6.0))
	return result
}
