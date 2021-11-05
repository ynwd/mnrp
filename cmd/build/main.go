package main

import (
	"bytes"
	"log"
	"os"
	"text/template"
)

type Data struct {
	Title       string
	Description string
}

func main() {
	data := Data{"Fastro.app - Beta", "The best interface is no interface"}
	generate("cmd/build/index.html", "web/home/public/index.html", data)
}

func generate(tmpl string, dest string, data Data) {
	t, err := template.ParseFiles(tmpl)
	if err != nil {
		panic(err)
	}

	var bfr bytes.Buffer
	err = t.Execute(&bfr, data)
	if err != nil {
		panic(err)
	}

	writeFile(bfr.String(), dest)
}

func writeFile(data string, output string) {
	f, errCreate := os.Create(output)
	if errCreate != nil {
		log.Fatal(errCreate)
	}

	_, errWrite := f.WriteString(data)
	if errWrite != nil {
		log.Fatal(errWrite)
	}

	defer f.Close()
}
