package main

import "github.com/ynwd/mnrp/internal"

func main() {
	err := internal.CreateApp().Listen(9000)
	if err != nil {
		panic(err)
	}
}
