package main

import (
	"math"
)

func feature04B(mm float64) (aa, bb float64) {
	Rad := math.Pi / 180.0
	cc := 400.0
	nn := mm - cc
	bb = math.Acos(nn/cc) / Rad
	ww := 8.0 * math.Sin(bb*Rad)
	aa = math.Acos((nn+ww)/cc) / Rad
	aa = 2 * aa
	bb = 90 - aa
	return
}
