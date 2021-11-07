package internal

import (
	"context"

	"github.com/fastrodev/fastrex"
)

func Handler(req fastrex.Request, res fastrex.Response) {
	res.Send("The best interface is no interface")
}

func CreateApp() fastrex.App {
	ctx := context.Background()
	app := fastrex.New()
	app.Ctx(ctx)
	app.Get("/api", Handler)
	return app
}
