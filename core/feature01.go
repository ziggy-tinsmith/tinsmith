package main

import (
	"math"
)

func feature01(dd, rr, ss, ee, tt float64) (s, ll1, ll2 float64, p []float64, a float64) {
	Rad := math.Pi / 180.0
	uu := float64(30)
	if dd > 300 {
		uu = 40
	}
	r := dd / 2.0
	aa := 45.0 / ss
	s = 2.0 * math.Pi * r / tt
	p = make([]float64, 0)
	ll1 = 2.0 * math.Pi * r
	ll2 = 2.0*math.Pi*r + uu
	for xx := float64(0); xx <= tt/2.0; xx += 1.0 {
		ff := xx * (360.0 / tt)
		qq := (rr-r*math.Cos(ff*Rad))*math.Tan(aa*Rad) + ee
		p = append(p, qq)
	}
	a = math.Pow(math.Pi, 2) * r * rr * (1 / math.Pow(10.0, 6))
	return
}
