package user

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type User struct {
	nickname string `json: "nickname"`
	pass     string `json: "pass"`
}

type UserHandler struct {
}

func NewHandler() *UserHandler {
	return &UserHandler{}
}

func (h *UserHandler) RegisterRoutes(r *mux.Router) {
	r.HandleFunc("/login", h.handleLogin).Methods("POST")
	r.HandleFunc("/register", h.handleRegister).Methods("POST")
	r.HandleFunc("/logout", h.handleLogout).Methods("POST")
}

func (h *UserHandler) handleLogin(w http.ResponseWriter, r *http.Request) {
	var data User
	fmt.Printf("Data: %+v", json.NewDecoder(r.Body))
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		log.Fatal("couldn't read data")
	}
	fmt.Fprintf(w, "Person: %+v", data)
}

func (h *UserHandler) handleLogout(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("logout"))
}

func (h *UserHandler) handleRegister(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("register"))
}
