// +build js,wasm

package main

import (
	"syscall/js"
)

func main() {
	window := js.Global().Get("window")
	select {}
}
