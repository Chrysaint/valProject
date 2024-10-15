package WebServer

import (
	"log"
	"net/http"
	"webServer/service/team"
	"webServer/service/user"

	"github.com/gorilla/mux"
)

type HttpServer struct {
	Host string
	Port string
}

func NewHttpServer() *HttpServer {
	return &HttpServer{
		Host: "127.0.0.1",
		Port: "42069",
	}
}

func (s *HttpServer) CreateHttpServer() error {
	router := mux.NewRouter()
	subrouter := router.PathPrefix("/api/v1").Subrouter()

	log.Printf("Listening on: %d", s.Port)
	userHandler := user.NewHandler()
	userHandler.RegisterRoutes(subrouter)
	teamHandler := team.NewHandler()
	teamHandler.RegisterRoutes(subrouter)

	return http.ListenAndServe(s.Host+":"+s.Port, router)
}
