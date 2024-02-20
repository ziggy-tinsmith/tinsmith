package main

import "math"

func feature34(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "I", "K", "S", "E", "U", "A", "B"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	D := getParameter(parameters, "D")
	I := getParameter(parameters, "I")
	K := getParameter(parameters, "K")
	G := D/2.0 + I
	S := 2.0 * math.Pi * G / 200.0
	result["SS"] = S
	S = getParameter(parameters, "S")
	E := getParameter(parameters, "E")
	U := getParameter(parameters, "U")
	Rad := math.Pi / 180.0
	R := D + 10.0 + I
	r := 0.1*D + 10.0 + I
	G = D/2.0 + I
	N := G - r
	M := R - r
	O := math.Asin(N/M) / Rad
	C := K / 2.0
	F := math.Asin(C/R) / Rad
	H := R - M*math.Cos(O*Rad)
	P := math.Pi / 180.0
	V := O - F
	W := 90.0 - O
	theta := math.Atan(math.Pi/S) / Rad
	result["LA"] = []interface{}{
		R * V * P,
		R * V * P / 60.0,
	}
	A := getParameter(parameters, "A")
	result["LB"] = []interface{}{
		r * W * P,
		r * W * P / 60.0,
	}
	B := getParameter(parameters, "B")
	result["ZMSA"] = R * V * P / A
	result["ZMSB"] = r * W * P / B
	L := R*V*P + r*W*P
	result["L"] = L + U
	result["H"] = []interface{}{
		H - I,
		H,
	}
	pa := make([]interface{}, 0)
	for X := 0.0; X <= A; X += 1.0 {
		Q := (R*math.Sin((F+X*(V/A))*Rad))*math.Tan(theta*Rad) + E
		pa = append(pa, Q)
	}
	result["PointsA"] = pa
	pb := make([]interface{}, 0)
	for X := 0.0; X <= B; X += 1.0 {
		Q := (N+r*math.Sin((O+X*(W/B))*Rad))*math.Tan(theta*Rad) + E
		pb = append(pb, Q)
	}
	result["PointsB"] = pb
	result["Area"] = ((2.0*math.Pi*R*math.Sin((O/2.0)*Rad))*R*O*P + (2.0*math.Pi*(N+r*math.Sin((O+(W/2.0))*Rad)))*r*W*P + 2.0*math.Pi*G*U) * (1.0 / math.Pow(10.0, 6.0))
	A = R - I/2.0
	B = r - I/2.0
	result["VL"] = I * ((2.0*math.Pi*A*math.Sin((O/2.0)*Rad))*A*O*P + (2.0*math.Pi*(N+B*math.Sin((O+(W/2.0))*Rad)))*B*W*P + 2.0*math.Pi*(G+I/2.0)*U) * (1.0 / math.Pow(10.0, 6.0))
	return result
}
