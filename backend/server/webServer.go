package main

import(
	"fmt";
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.send(w, "Hello World")
	})
	http.ListenAndServe(":5173", nil)
}