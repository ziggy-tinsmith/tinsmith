package main

import (
	"math"
)

func feature13(kk, gg, ll, zz, ss, ee float64) (llll, ffkk1, ffkk2, ffgg1, ffgg2, ott, odd, orr, orrkk, orrgg, occkk, occgg float64) {
	Rad := math.Pi / 180.0
	r := kk / 2.0
	rr := gg / 2.0
	bb := math.Atan((rr-r)/ll) / Rad
	vv := 1.0 / math.Sin(bb*Rad)
	// jj := 1.0 / math.Sin(bb*Rad)
	yy := r - zz
	ii := rr - ss
	uu := math.Acos(yy/r) / Rad
	oo := math.Acos(ii/rr) / Rad
	aa := math.Atan((ii-yy)/ll) / Rad
	ww := 1.0 / math.Cos(aa*Rad)
	cc := r * math.Sin(uu*Rad)
	dd := rr * math.Sin(oo*Rad)
	ff := math.Atan((dd-cc)/(ll*ww)) / Rad
	tt := 1.0 / math.Cos(ff*Rad)
	nn := r - ee*math.Sin(bb*Rad)
	mm := rr + ee*math.Sin(bb*Rad)
	hh := (oo - uu) * math.Sin(bb*Rad)
	pp := (180.0 - uu) * math.Sin(bb*Rad)
	qq := (180.0 - oo) * math.Sin(bb*Rad)
	llll = ll * ww
	ffkk1 = cc
	ffkk2 = 2.0 * cc
	ffgg1 = dd
	ffgg2 = 2.0 * dd
	ott = ll * ww * tt
	odd = math.Sqrt(math.Pow(dd+cc, 2.0) + math.Pow(ll*ww, 2.0))
	orr = 2.0 * r * vv * math.Sin((hh/2.0)*Rad)
	orrkk = nn * vv
	orrgg = mm * vv
	occkk = 2.0 * nn * vv * math.Sin((pp/2.0)*Rad)
	occgg = 2.0 * mm * vv * math.Sin((qq/2.0)*Rad)
	return
}
