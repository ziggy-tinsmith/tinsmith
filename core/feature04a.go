package main

import (
	"math"
)

func feature04A(aa float64) (mm float64) {
	Rad := math.Pi / 180.0
	cc := 400.0
	bb := aa / 2.0
	nn := cc * math.Cos(bb*Rad)
	ww := 8.0 * math.Sin(bb*Rad)
	mm = cc + nn - ww
	return
}
