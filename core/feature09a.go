package main

import (
	"math"
)

func feature09A(dd, aa, ll, tt float64) (ff1, ff2, hh, ss float64, p []float64, pp1ll1, pp1ll2, pp2ll1, pp2ll2 float64) {
	Rad := math.Pi / 180.0
	uu := 30.0
	if dd > 300.0 {
		uu = 40.0
	}
	r := dd / 2.0
	ee := math.Acos((r-aa)/r) / Rad
	gg := r * math.Sin(ee*Rad)
	pp := math.Pi / 180.0
	ii := tt / 2.0
	bb := r * ee * pp
	ff1 = gg
	ff2 = 2.0 * ff1
	hh = math.Sqrt(math.Pow(ll, 2.0) + math.Pow(aa, 2.0))
	ss = bb / ii
	p = make([]float64, 0)
	for xx := float64(0); xx <= tt/2.0; xx += 1.0 {
		// ff := xx * (360.0 / tt)
		qq := math.Sqrt(math.Pow(r*math.Cos(ee*Rad)-r*math.Cos(xx*(ee/ii)*Rad), 2.0) + math.Pow(r*math.Sin(ee*Rad)-r*math.Sin(xx*(ee/ii)*Rad), 2.0) + math.Pow(ll, 2.0))
		p = append(p, qq)
	}
	vv := 2.0 * math.Pi * r
	ww := uu / 2.0
	pp1ll1 = (1.0/4.0)*vv - bb + ww
	pp1ll2 = (3.0/4.0)*vv - bb + ww
	pp2ll1 = (1.0/2.0)*vv - bb + ww
	pp2ll2 = (1.0/2.0)*vv - bb + ww
	return
}
