package main

import (
	"math"
)

func feature06(dd, aa, tt float64) (ss, ll1, ll2 float64, p []float64) {
	Rad := math.Pi / 180.0
	uu := float64(30)
	if dd > 300 {
		uu = 40
	}
	r := dd / 2.0
	bb := aa / 2.0
	ll := r * math.Tan(bb*Rad)
	ss = 2.0 * math.Pi * r / tt
	ll1 = 2.0 * math.Pi * r
	ll2 = 2.0*math.Pi*r + uu
	p = make([]float64, 0)
	for xx := float64(0); xx <= tt/2.0; xx += 1.0 {
		ff := xx * (360.0 / tt)
		qq := ll - r*math.Tan(bb*Rad)*math.Cos(ff*Rad)
		p = append(p, qq)
	}
	return
}
