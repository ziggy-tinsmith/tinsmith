package main

import (
	"math"
)

func feature09A(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"D", "A", "L", "T"})
	if parameters == nil {
		return nil
	}
	D := getParameter(parameters, "D")
	A := getParameter(parameters, "A")
	L := getParameter(parameters, "L")
	T := getParameter(parameters, "T")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	U := 30.0
	if D > 300.0 {
		U = 40.0
	}
	r := D / 2.0
	E := math.Acos((r-A)/r) / Rad
	G := r * math.Sin(E*Rad)
	P := math.Pi / 180.0
	I := T / 2.0
	B := r * E * P
	result["F1"] = G
	result["F2"] = 2.0 * G
	result["H"] = math.Sqrt(math.Pow(L, 2.0) + math.Pow(A, 2.0))
	result["S"] = B / I
	p := make([]interface{}, 0)
	for X := float64(0); X <= T/2.0; X += 1.0 {
		// F := X * (360.0 / T)
		Q := math.Sqrt(math.Pow(r*math.Cos(E*Rad)-r*math.Cos(X*(E/I)*Rad), 2.0) + math.Pow(r*math.Sin(E*Rad)-r*math.Sin(X*(E/I)*Rad), 2.0) + math.Pow(L, 2.0))
		p = append(p, Q)
	}
	result["Points"] = p
	V := 2.0 * math.Pi * r
	W := U / 2.0
	result["P1L"] = []interface{}{
		(1.0/4.0)*V - B + W,
		(3.0/4.0)*V - B + W,
	}
	result["P2L"] = []interface{}{
		(1.0/2.0)*V - B + W,
		(1.0/2.0)*V - B + W,
	}
	return result
}
