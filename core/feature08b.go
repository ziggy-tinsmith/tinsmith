package main

import (
	"math"
)

func feature08B(dd, ii, tt float64) (rr2, rr11, rr12, bb, cc float64) {
	Rad := math.Pi / 180.0
	rr := dd / 2.0
	r := rr - ii
	pp := math.Pi / 180.0
	aa := 360.0 / tt
	rr2 = r
	rr11 = rr
	rr12 = rr + 6.0
	bb = rr * aa * pp
	cc = 2.0 * rr * math.Sin((aa/2.0)*Rad)
	return
}
