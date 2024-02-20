package main

import (
	"math"
)

func feature07(dd, aa, ee float64) (rr1, rr2, cc, ss float64) {
	Rad := math.Pi / 180.0
	r := dd / 2.0
	bb := math.Atan(r/aa) / Rad
	uu := 1.0 / math.Sin(bb*Rad)
	vv := 180.0 * math.Sin(bb*Rad)
	rr1 = r * uu
	rr2 = rr1 + ee
	cc = 2.0 * r * uu * math.Sin((vv/3.0)*Rad)
	ss = 2.0 * r * uu * math.Sin(vv*Rad)
	return
}
