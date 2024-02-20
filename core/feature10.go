package main

import (
	"math"
)

func feature10(kk, gg, ll, ee, tt, ett float64) (sr, br, sc, bc, zmks, zmgs, wll, dd, a float64) {
	Rad := math.Pi / 180.0
	r := kk / 2.0
	rr := gg / 2.0
	bb := math.Atan((rr-r)/ll) / Rad
	nn := r - ee*math.Sin(bb*Rad)
	mm := rr + ee*math.Sin(bb*Rad)
	uu := 1 / math.Sin(bb*Rad)
	vv := (180.0 / tt) * math.Sin(bb*Rad)
	sr = nn * uu
	br = mm * uu
	sc = 2.0 * nn * uu * math.Sin(vv*Rad)
	bc = 2.0 * mm * uu * math.Sin(vv*Rad)
	vv = (180.0 / ett) * math.Sin(bb*Rad)
	pp := mm*uu - nn*uu
	hh := pp * math.Cos(vv*Rad)
	aa := (mm*uu + nn*uu) * math.Sin(vv*Rad)
	theta := math.Atan(aa/hh) / Rad
	dd = hh * (1.0 / math.Cos(theta*Rad))
	zmks = 2.0 * nn * uu * math.Sin(vv*Rad)
	zmgs = 2.0 * mm * uu * math.Sin(vv*Rad)
	wll = pp
	a = math.Pi * (rr + r) * math.Sqrt(math.Pow(ll, 2.0)+math.Pow(rr-r, 2.0)) * (1.0 / math.Pow(10.0, 6.0))
	return
}
