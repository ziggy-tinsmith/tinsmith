package main

import (
	"math"
)

func feature05(dd, rr, ss, aa, ee, tt float64) (s, ll1, ll2 float64, p []float64, dtt, a float64) {
	Rad := math.Pi / 180.0
	uu := float64(30)
	if dd > 300 {
		uu = 40
	}
	r := dd / 2.0
	cc := aa / 2.0
	bb := cc / ss
	s = 2.0 * math.Pi * r / tt
	ll1 = 2.0 * math.Pi * r
	ll2 = 2.0*math.Pi*r + uu
	p = make([]float64, 0)
	for xx := float64(0); xx <= tt/2.0; xx += 1.0 {
		ff := xx * (360.0 / tt)
		qq := (rr-r*math.Cos(ff*Rad))*math.Tan((bb+ee)*Rad) + ee
		p = append(p, qq)
	}
	dtt = rr * math.Tan(cc*Rad)
	a = 2.0 * math.Pow(math.Pi, 2) * r * rr * (aa / 180.0) * (1 / math.Pow(10.0, 6))
	return
}
