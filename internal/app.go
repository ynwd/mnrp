package internal

import (
	"context"

	"github.com/fastrodev/fastrex"
)

func CreateApp() fastrex.App {
	ctx := context.Background()
	app := fastrex.New()
	app.Ctx(ctx)
	app.Get("/api", func(req fastrex.Request, res fastrex.Response) {
		res.Header().Set("Access-Control-Allow-Origin", "*")
		res.Send("The best interface is no interface")
	})

	return app
}
