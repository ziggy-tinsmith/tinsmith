package main

import (
	"math"
)

func feature03(kk, gg, dd float64) (rr, aa float64) {
	r := dd / 2.0
	mm := gg + kk
	nn := gg - kk
	pp := math.Pi / 180.0
	rr = r * (mm / nn)
	aa = nn / (dd * pp)
	return
}
