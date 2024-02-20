package main

import (
	"math"
)

func feature02(kk, gg, dd float64) (rr, aa float64) {
	Rad := math.Pi / 180.0
	nn := kk / 2.0
	mm := gg / 2.0
	bb := math.Atan((mm-nn)/dd) / Rad
	uu := 1.0 / math.Tan(bb*Rad)
	rr = (1.0 / 2.0) * (mm + nn) * uu
	aa = bb
	return
}
