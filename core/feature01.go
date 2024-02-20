package main

import (
	"math"
)

func feature01(dd, rr, ss, ee, tt float64) (co, c1, c2 float64, points []float64, area float64) {
	Rad := math.Pi / 180.0
	uu := float64(30)
	if dd > 300 {
		uu = 40
	}
	r := dd / 2.0
	aa := 45.0 / ss
	co = 2.0 * math.Pi * r / tt
	points = make([]float64, 0)
	c1 = 2.0 * math.Pi * r
	c2 = 2.0*math.Pi*r + uu
	for xx := float64(0); xx <= tt/2.0; xx += 1.0 {
		ff := xx * (360.0 / tt)
		qq := (rr-r*math.Cos(ff*Rad))*math.Tan(aa*Rad) + ee
		points = append(points, qq)
	}
	area = math.Pow(math.Pi, 2) * r * rr * (1 / math.Pow(10.0, 6))
	return
}
