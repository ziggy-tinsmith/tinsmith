package main

import "math"

func feature54(arguments map[string]interface{}) map[string]interface{} {
	parameters := extractParameters(arguments, []string{"K", "G", "L", "A", "N", "M", "P", "V", "T"})
	if parameters == nil {
		return nil
	}
	result := make(map[string]interface{})
	K := getParameter(parameters, "K")
	G := getParameter(parameters, "G")
	L := getParameter(parameters, "L")
	A := getParameter(parameters, "A")
	N := getParameter(parameters, "N")
	M := getParameter(parameters, "M")
	P := getParameter(parameters, "P")
	V := getParameter(parameters, "V")
	T := getParameter(parameters, "T")
	Rad := math.Pi / 180.0
	B := math.Atan(((G/2.0)-(K/2.0))/L) / Rad
	result["SR"] = (K / 2.0) * (1.0 / math.Sin(B*Rad))
	result["BR"] = (G / 2.0) * (1.0 / math.Sin(B*Rad))
	result["KS"] = K * math.Pi / T
	result["GS"] = G * math.Pi / T
	pl := make([]interface{}, 0)
	for X := T / 4.0; X <= T-T/4.0; X += 1.0 {
		B := math.Atan(((G/2.0)-(K/2.0))/L) / Rad
		Z := math.Atan(((M/2.0)-(N/2.0))/P) / Rad
		C := math.Atan(((G/2.0)-(K/2.0))/(L*math.Sin(A*Rad))) / Rad
		F := X * (360.0 / T)
		H := (G / 2.0) * (1.0 / math.Tan(C*Rad))
		J := (G / 2.0) * math.Cos(A*Rad) * math.Sin(F*Rad)
		E := math.Atan((G/2.0)*math.Sin(F*Rad)/((G/2.0)*(1.0/math.Tan(B*Rad)))) / Rad
		I := math.Atan((G/2.0)*math.Cos(F*Rad)/((G/2.0)*(1.0/math.Tan(B*Rad)))) / Rad
		Y := math.Acos(H*math.Tan((math.Atan((G/2.0)*math.Cos(F*Rad)/(H-J))/Rad)*Rad)/(G/2.0)) / Rad
		O := math.Atan((G/2.0)*math.Sin(Y*Rad)/H) / Rad
		U := math.Atan((G/2.0)*math.Cos(Y*Rad)/H) / Rad
		D := (G/2.0)*(1.0/math.Tan(B*Rad)) - ((N/2.0)*(1.0/math.Tan(Z*Rad))+V)*math.Tan(Z*Rad)*(1.0/math.Sin(A*Rad))
		S := (D / (math.Cos(B*Rad) + math.Tan((90.0-A-Z)*Rad)*math.Sin(B*Rad)*math.Cos((90.0+F)*Rad))) * math.Cos(I*Rad) * math.Cos((A-E)*Rad)
		R := ((N/2.0)*(1.0/math.Tan(Z*Rad)) + V - D*math.Cos(A*Rad) + S) * math.Tan(Z*Rad)
		W := (1.0 / 2.0) * (M + N)
		theta := math.Atan(((H-(((G/2.0)*math.Pow(1.0/math.Tan(C*Rad), 2.0)-math.Sqrt((math.Pow(M/2.0, 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(Y*Rad), 2.0)+math.Pow(M/2.0, 2.0)*math.Pow(1.0/math.Tan(C*Rad), 2.0)))/(math.Sin(C*Rad)*(math.Pow(math.Cos(Y*Rad), 2.0)+math.Pow(1.0/math.Tan(C*Rad), 2.0))))*math.Cos(O*Rad)*math.Cos(U*Rad))-(H-(((G/2.0)*math.Pow(1.0/math.Tan(C*Rad), 2.0)-math.Sqrt((math.Pow(W/2.0, 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(Y*Rad), 2.0)+math.Pow(W/2.0, 2.0)*math.Pow(1.0/math.Tan(C*Rad), 2.0)))/(math.Sin(C*Rad)*(math.Pow(math.Cos(Y*Rad), 2.0)+math.Pow(1.0/math.Tan(C*Rad), 2.0))))*math.Cos(O*Rad)*math.Cos(U*Rad)))/(P/2.0)) / Rad
		r := ((((G/2.0)*math.Pow(1.0/math.Tan(C*Rad), 2.0)-math.Sqrt((math.Pow(R, 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(Y*Rad), 2.0)+math.Pow(R, 2.0)*math.Pow(1.0/math.Tan(C*Rad), 2.0)))/(math.Sin(C*Rad)*(math.Pow(math.Cos(Y*Rad), 2.0)+math.Pow(1.0/math.Tan(C*Rad), 2.0))))*math.Cos(O*Rad)*math.Cos(U*Rad)*(1.0/math.Sin((A-E)*Rad)) - (D/(math.Cos(B*Rad)+math.Tan((90.0-A-Z)*Rad)*math.Sin(B*Rad)*math.Cos((90.0+F)*Rad)))*math.Cos(I*Rad)) * math.Sin((A-E)*Rad) / (math.Tan((A-E)*Rad) + math.Tan(theta*Rad))
		Q := (((G/2.0)*math.Pow(1.0/math.Tan(C*Rad), 2.0)-math.Sqrt((math.Pow(R+r*math.Tan(Z*Rad), 2.0)-math.Pow(H, 2.0))*math.Pow(math.Cos(Y*Rad), 2.0)+math.Pow(R+r*math.Tan(Z*Rad), 2.0)*math.Pow(1.0/math.Tan(C*Rad), 2.0)))/(math.Sin(C*Rad)*(math.Pow(math.Cos(Y*Rad), 2.0)+math.Pow(1.0/math.Tan(C*Rad), 2.0))))*math.Cos(O*Rad)*math.Cos(U*Rad)*(1.0/math.Sin((A-E)*Rad))*(1.0/math.Cos(I*Rad)) - (K/2.0)*(1.0/math.Sin(B*Rad))
		pl = append(pl, Q)
	}
	result["PointsL"] = pl
	return result
}
