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
	"feature01":  feature01,
	"feature02":  feature02,
	"feature03":  feature03,
	"feature04a": feature04A,
	"feature04b": feature04B,
	"feature05":  feature05,
	"feature06":  feature06,
	"feature07":  feature07,
	"feature08a": feature08A,
	"feature08b": feature08B,
	"feature09a": feature09A,
	"feature09b": feature09B,
	"feature10":  feature10,
	"feature11":  feature11,
	"feature12":  feature12,
	"feature13":  feature13,
	"feature14":  feature14,
	"feature15":  feature15,
	"feature16":  feature16,
	"feature17":  feature17,
	"feature18":  feature18,
	"feature19":  feature19,
	"feature20":  feature20,
	"feature21":  feature21,
	"feature22":  feature22,
	"feature23":  feature23,
	"feature24":  feature24,
	"feature25":  feature25,
	"feature26":  feature26,
	"feature27":  feature27,
	"feature28":  feature28,
	"feature29":  feature29,
	"feature30":  feature30,
	"feature31":  feature31,
	"feature32":  feature32,
	"feature33":  feature33,
	"feature34":  feature34,
	"feature35":  feature35,
	"feature39":  feature39,
	"feature40":  feature40,
	"feature41":  feature41,
	"feature43":  feature43,
	"feature44":  feature44,
	"feature45":  feature45,
	"feature46":  feature46,
	"feature47":  feature47,
	"feature48":  feature48,
	"feature49":  feature49,
	"feature50":  feature50,
	"feature51":  feature51,
	"feature52":  feature52,
	"feature53":  feature53,
	"feature54":  feature54,
	"feature55":  feature55,
	"feature56":  feature56,
	"feature57":  feature57,
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
