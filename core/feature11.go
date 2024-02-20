package main

import (
	"math"
)

func feature11(kk, gg, ll, ss, ee, tt, ett float64) (kr, gr, kc, gc, okr, ogr, zmks, zmgs, wll, dds []float64, a float64) {
	Rad := math.Pi / 180.0
	r := kk / 2.0
	rr := gg / 2.0
	bb := math.Atan((rr-r)/ll) / Rad
	ww := (1.0 / 2.0) * ee * math.Sin(bb*Rad)
	kk = r + ww
	gg = rr - ww
	cc := (gg - kk) / ss
	uu := 1 / math.Sin(bb*Rad)
	vv := (180.0 / tt) * math.Sin(bb*Rad)
	kr = make([]float64, 0)
	gr = make([]float64, 0)
	kc = make([]float64, 0)
	gc = make([]float64, 0)
	for xx := float64(1); xx <= ss; xx += 1.0 {
		yy := xx - 1.0
		nn := kk + yy*cc - ww
		mm := kk + yy*cc + ww
		kr = append(kr, nn*uu)
		gr = append(gr, mm*uu)
		kc = append(kc, 2.0*nn*uu*math.Sin(vv*Rad))
		gc = append(gc, 2.0*mm*uu*math.Sin(vv*Rad))
	}
	vv = (180.0 / ett) * math.Sin(bb*Rad)
	okr = make([]float64, 0)
	ogr = make([]float64, 0)
	zmks = make([]float64, 0)
	zmgs = make([]float64, 0)
	wll = make([]float64, 0)
	dds = make([]float64, 0)
	for xx := float64(1); xx <= ss; xx += 1.0 {
		yy := xx - 1.0
		nn := kk + yy*cc - ww
		mm := kk + yy*cc + ww
		pp := mm*uu - nn*uu
		hh := pp * math.Cos(vv*Rad)
		aa := (mm*uu + nn*uu) * math.Sin(vv*Rad)
		theta := math.Atan(aa/hh) / Rad
		dd := hh * (1.0 / math.Cos(theta*Rad))
		okr = append(okr, nn*uu)
		ogr = append(ogr, mm*uu)
		zmks = append(zmks, 2.0*nn*uu*math.Sin(vv*Rad))
		zmgs = append(zmgs, 2.0*mm*uu*math.Sin(vv*Rad))
		wll = append(wll, pp)
		dds = append(dds, dd)
	}
	a = math.Pi * (rr + r) * math.Sqrt(math.Pow(ll, 2.0)+math.Pow(rr-r, 2.0)) * (1.0 / math.Pow(10.0, 6.0))
	return
}
