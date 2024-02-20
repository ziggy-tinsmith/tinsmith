package main

import (
	"math"
)

func feature12(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "S", "E", "T", "ET"})
	if parameters == nil {
		return nil
	}
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	S := getParameter(parameters, "S")
	E := getParameter(parameters, "E")
	T := getParameter(parameters, "T")
	ET := getParameter(parameters, "ET")
	result := make(map[string]interface{})
	Rad := math.Pi / 180.0
	r := K / 2.0
	R := G / 2.0
	B := math.Atan((R-r)/L) / Rad
	W := (1.0 / 2.0) * E * math.Sin(B*Rad)
	K = r + W
	G = R - W
	C := (G - K) / S
	U := 1 / math.Sin(B*Rad)
	V := (180.0 / T) * math.Sin(B*Rad)
	kr := make([]interface{}, 0)
	gr := make([]interface{}, 0)
	kc := make([]interface{}, 0)
	gc := make([]interface{}, 0)
	for X := float64(1); X <= S; X += 1.0 {
		Y := X - 1.0
		N := K + Y*C - W
		M := K + X*C + W
		kr = append(kr, N*U)
		gr = append(gr, M*U)
		kc = append(kc, 2.0*N*U*math.Sin(V*Rad))
		gc = append(gc, 2.0*M*U*math.Sin(V*Rad))
	}
	result["KR"] = kr
	result["GR"] = gr
	result["KC"] = kc
	result["GC"] = gc
	V = (180.0 / ET) * math.Sin(B*Rad)
	okr := make([]interface{}, 0)
	ogr := make([]interface{}, 0)
	zmks := make([]interface{}, 0)
	zmgs := make([]interface{}, 0)
	wll := make([]interface{}, 0)
	d := make([]interface{}, 0)
	for X := float64(1); X <= S; X += 1.0 {
		Y := X - 1.0
		N := K + Y*C - W
		M := K + X*C + W
		P := M*U - N*U
		H := P * math.Cos(V*Rad)
		A := (M*U + N*U) * math.Sin(V*Rad)
		theta := math.Atan(A/H) / Rad
		D := H * (1.0 / math.Cos(theta*Rad))
		okr = append(okr, N*U)
		ogr = append(ogr, M*U)
		zmks = append(zmks, 2.0*N*U*math.Sin(V*Rad))
		zmgs = append(zmgs, 2.0*M*U*math.Sin(V*Rad))
		wll = append(wll, P)
		d = append(d, D)
	}
	result["OKR"] = okr
	result["OGR"] = ogr
	result["ZMKS"] = zmks
	result["ZMGS"] = zmgs
	result["WLL"] = wll
	result["D"] = d
	result["Area"] = math.Pi * (R + r) * math.Sqrt(math.Pow(L, 2.0)+math.Pow(R-r, 2.0)) * (1.0 / math.Pow(10.0, 6.0))
	return result
}
