package serverless

import (
	"net/http"

	"github.com/ynwd/mnrp/internal"
)

func Main(w http.ResponseWriter, r *http.Request) {
	internal.CreateApp().Serverless(true).ServeHTTP(w, r)
}
