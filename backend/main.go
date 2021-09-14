package main

import (
	"emp-test/app"
	"emp-test/config"
)

func main() {

	config := config.GetConfig()

	app := &app.App{}
	app.Initialize(config)

	app.Run()

}
