package main

import (
	"math"
)

func feature09B(dd, aa float64) (ff1, ff2, rr1, rr2, dd1, dd2, tt, hll01, hll02, hll11, hll12, hll21, hll22, hll31, hll32 float64) {
	Rad := math.Pi / 180.0
	uu := 30.0
	if dd > 300.0 {
		uu = 40.0
	}
	r := dd / 2.0
	ee := math.Acos((r-aa)/r) / Rad
	gg := r * math.Sin(ee*Rad)
	pp := math.Pi / 180.0
	bb := r * ee * pp
	ff1 = gg
	ff2 = 2.0 * ff1
	rr1 = bb
	rr2 = 2.0 * rr1
	dd1 = bb - gg
	dd2 = 2.0 * dd1
	tt = (1.0/4.0)*dd*math.Pi - bb
	hll01 = dd*math.Pi - 2.0*(bb-gg)
	hll02 = hll01 + uu
	hll11 = (1.0/4.0)*dd*math.Pi - bb + gg
	hll12 = hll11 + uu
	hll21 = (1.0/2.0)*dd*math.Pi - bb + gg
	hll22 = hll21 + uu
	hll31 = (3.0/4.0)*dd*math.Pi - bb + gg
	hll32 = hll31 + uu
	return
}
