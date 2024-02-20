// +build js,wasm

package main

import (
	"fmt"
	"syscall/js"
)

func arrayToJS(array []float64) interface{} {
	result := make([]interface{}, 0)
	for _, value := range array {
		result = append(result, value)
	}
	return result
}

func getValue(object js.Value, field string) (js.Value, error) {
	value := object.Get(field)
	if value.IsUndefined() {
		return value, fmt.Errorf("Value is undefined")
	}
	if value.IsNull() {
		return value, fmt.Errorf("Value is null")
	}
	if value.IsNaN() {
		return value, fmt.Errorf("Value is NaN")
	}
	return value, nil
}

func feature01Wrapped(this js.Value, args []js.Value) interface{} {
	var dd, rr, ss, ee, tt float64
	if value, fail := getValue(args[0], "dd"); fail == nil {
		dd = value.Float()
	} else {
		return nil
	}
	if value, fail := getValue(args[0], "rr"); fail == nil {
		rr = value.Float()
	} else {
		return nil
	}
	if value, fail := getValue(args[0], "ss"); fail == nil {
		ss = value.Float()
	} else {
		return nil
	}
	if value, fail := getValue(args[0], "ee"); fail == nil {
		ee = value.Float()
	} else {
		return nil
	}
	if value, fail := getValue(args[0], "tt"); fail == nil {
		tt = value.Float()
	} else {
		return nil
	}
	s, ll1, ll2, p, a := feature01(dd, rr, ss, ee, tt)
	result := make(map[string]interface{})
	result["s"] = s
	result["ll1"] = ll1
	result["ll2"] = ll2
	result["p"] = arrayToJS(p)
	result["a"] = a
	return result
}

func main() {
	window := js.Global().Get("window")
	window.Set("feature01", js.FuncOf(feature01Wrapped))
	select {}
}
