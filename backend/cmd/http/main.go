package main

import (
	"fmt"
	"log"
	Config "webServer/config"
	"webServer/db"
	WebServer "webServer/internal"

	"github.com/go-sql-driver/mysql"
)

func main() {

	db, err := db.NewMySQLStorage(mysql.Config{
		User:                 Config.Envs.DBUser,
		Passwd:               Config.Envs.DBPassword,
		Addr:                 Config.Envs.DBAddress,
		DBName:               Config.Envs.DBName,
		Net:                  "tcp",
		AllowNativePasswords: true,
		ParseTime:            true,
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Connected to database: %+v\n", db)
	ws := WebServer.NewHttpServer()
	err = ws.CreateHttpServer()
	if err != nil {
		panic(err)
	}
}
