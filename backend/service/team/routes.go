package team

import (
	"net/http"

	"github.com/gorilla/mux"
)

type TeamHandler struct {
}

func NewHandler() *TeamHandler {
	return &TeamHandler{}
}

func (h *TeamHandler) RegisterRoutes(r *mux.Router) {
	r.HandleFunc("/team/create", h.handleCreateTeam).Methods("POST")
	r.HandleFunc("/team/invite", h.handleInviteToTeam).Methods("POST")
	r.HandleFunc("/team/getTeam", h.handleGetTeam).Methods("GET")
}

func (h *TeamHandler) handleCreateTeam(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("create"))
}

func (h *TeamHandler) handleInviteToTeam(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("invite"))
}

func (h *TeamHandler) handleGetTeam(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("getTeam"))
}
