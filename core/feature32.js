package main

import "math"

func feature32(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"A", "B", "H", "I", "C", "D", "S"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	A := getParameter(parameters, "A")
	B := getParameter(parameters, "B")
	H := getParameter(parameters, "H")
	I := getParameter(parameters, "I")
	C := getParameter(parameters, "C")
	D := getParameter(parameters, "D")
	S := getParameter(parameters, "S")
	Rad := math.Pi / 180.0
	K := A / 2.0
	G := B / 2.0
	N := C / 2.0
	M := D / 2.0
	E := math.Atan((G-K)/H) / Rad
	F := math.Atan((M-N)/H) / Rad
	O := 1.0 / math.Cos(E*Rad)
	U := 1.0 / math.Cos(F*Rad)
	V := 1.0 / math.Tan(E*Rad)
	W := 1.0 / math.Tan(F*Rad)
	P := S * math.Cos(E*Rad)
	R := S * math.Cos(F*Rad)
	Y := 2.0 * I * O
	J := 2.0 * I * U
	result["AA"] = 90.0 - F
	la := make([]interface{}, 0)
	la = append(la, A+Y)
	result["BA"] = []interface{}{
		I*U - 5.0,
		I*U - 5.0 + 45.0,
	}
	ha := make([]interface{}, 0)
	for X := 0.0; X <= H; X += R {
		ha = append(ha, X*U)
		Q := (X + (K+I*O)*V) * math.Tan(E*Rad)
		la = append(la, Q)
		la = append(la, 2.0*Q)
	}
	ha = append(ha, H*U)
	la = append(la, G+I*O)
	la = append(la, 2.0*(G+I*O))
	result["LA"] = la
	result["HA"] = ha
	result["AB"] = 90.0 - E
	lb := make([]interface{}, 0)
	lb = append(lb, C+J)
	result["BB"] = []interface{}{
		I*O - 5.0,
		I*O - 5.0 + 45.0,
	}
	hb := make([]interface{}, 0)
	for X := 0.0; X <= H; X += P {
		hb = append(hb, X*O)
		Q := (X + (N+I*U)*W) * math.Tan(F*Rad)
		lb = append(lb, Q)
		lb = append(lb, 2.0*Q)
	}
	hb = append(hb, H*O)
	lb = append(lb, M+I*U)
	lb = append(lb, 2.0*(M+I*U))
	result["HB"] = hb
	result["LB"] = lb
	result["Area"] = (H*U*(A+B+Y) + H*O*(C+D+J)) * (1.0 / math.Pow(10.0, 6.0))
	return result
}
