package internal

import (
	"io/ioutil"
	"log"
	"net/http/httptest"
	"testing"

	"github.com/fastrodev/fastrex"
)

func TestHandler(t *testing.T) {
	tests := []struct {
		name    string
		handler fastrex.HandlerFunc
		want    string
	}{
		{
			name:    "success",
			handler: Handler,
			want:    "The best interface is no interface",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			req := httptest.NewRequest("GET", "/api", nil)
			w := httptest.NewRecorder()
			app := CreateApp()
			app.ServeHTTP(w, req)
			resp := w.Result()
			bodyBytes, err := ioutil.ReadAll(resp.Body)
			if err != nil {
				log.Fatal(err)
			}
			if got := string(bodyBytes); got != tt.want {
				t.Errorf("CreateApp() = %v, want %v", got, tt.want)
			}
		})
	}
}
