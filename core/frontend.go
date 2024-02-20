// +build js,wasm

package main

import (
	"encoding/json"
	"syscall/js"
)

type genericFunction func(map[string]interface{}) map[string]interface{}

func genericWrapper(args []js.Value, function genericFunction) interface{} {
	arguments := make(map[string]interface{})
	if fail := json.Unmarshal([]byte(args[0].String()), &arguments); fail == nil {
		if result, fail := json.Marshal(function(arguments)); fail == nil {
			return string(result)
		} else {
			return nil
		}
	} else {
		return nil
	}
}

var lut = map[string]genericFunction{
	"feature01": feature01,
}

func main() {
	window := js.Global().Get("window")
	for name := range lut {
		function, _ := lut[name]
		window.Set(name, js.FuncOf(func(this js.Value, args []js.Value) interface{} {
			return genericWrapper(args, function)
		}))
	}
	select {}
}
