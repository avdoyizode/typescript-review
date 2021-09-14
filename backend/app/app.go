package app

import (
	"context"
	"emp-test/config"
	"emp-test/env"
	"emp-test/handler"
	"emp-test/model"
	"net/http"
	"os"
	"os/signal"
	"time"

	gohandlers "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/hashicorp/go-hclog"

	//"github.com/jinzhu/gorm"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var bindAddress = env.String("BIND_ADDRESS", false, ":9090", "Bind address for the server")

// App has router and db instances
type App struct {
	Router *mux.Router
	db     *gorm.DB
	log    hclog.Logger
}

// App initialize with predefined configuration

func (a *App) Initialize(config *config.Config) error {
	env.Parse()
	a.log = hclog.Default()

	/*dbURI := fmt.Sprintf("%s:%s@/%s?charset=%s&parseTime=True",
	config.DB.Username,
	config.DB.Password,
	config.DB.Name,
	config.DB.Charset) */
	dsn := "eduUSER:N8wfs92@@tcp(a2nlmysql7plsk.secureserver.net:3306)/EduDB?charset=utf8&parseTime=True"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		a.log.Error("Error connecting to database", "error", err)
		return err
	}

	a.db = model.DBMigrate(db)
	a.Router = mux.NewRouter()
	a.setRouters()

	return nil

}

// Set all required routers
func (a *App) setRouters() {
	// Routing for handling the projects
	a.Get("/employees", a.GetAllEmployees)
	a.Post("/employees", a.CreateEmployee)
	a.Get("/employees/{title}", a.GetEmployee)
	a.Put("/employees/{title}", a.UpdateEmployee)
	a.Delete("/employees/{title}", a.DeleteEmployee)
	a.Put("/employees/{title}/disable", a.DisableEmployee)
	a.Put("/employees/{title}/enable", a.EnableEmployee)
}

// Wrap the router for GET method
func (a *App) Get(path string, f func(w http.ResponseWriter, r *http.Request)) {
	a.Router.HandleFunc(path, f).Methods("GET")
}

// Wrap the router for POST method
func (a *App) Post(path string, f func(w http.ResponseWriter, r *http.Request)) {
	a.Router.HandleFunc(path, f).Methods("POST")
}

// Wrap the router for PUT method
func (a *App) Put(path string, f func(w http.ResponseWriter, r *http.Request)) {
	a.Router.HandleFunc(path, f).Methods("PUT")
}

// Wrap the router for DELETE method
func (a *App) Delete(path string, f func(w http.ResponseWriter, r *http.Request)) {
	a.Router.HandleFunc(path, f).Methods("DELETE")
}

// Handlers to manage Employee Data
func (a *App) GetAllEmployees(w http.ResponseWriter, r *http.Request) {
	handler.GetAllEmployees(a.db, w, r)
}

func (a *App) CreateEmployee(w http.ResponseWriter, r *http.Request) {
	handler.CreateEmployee(a.db, w, r)
}

func (a *App) GetEmployee(w http.ResponseWriter, r *http.Request) {
	handler.GetEmployee(a.db, w, r)
}

func (a *App) UpdateEmployee(w http.ResponseWriter, r *http.Request) {
	handler.UpdateEmployee(a.db, w, r)
}

func (a *App) DeleteEmployee(w http.ResponseWriter, r *http.Request) {
	handler.DeleteEmployee(a.db, w, r)
}

func (a *App) DisableEmployee(w http.ResponseWriter, r *http.Request) {
	handler.DisableEmployee(a.db, w, r)
}

func (a *App) EnableEmployee(w http.ResponseWriter, r *http.Request) {
	handler.EnableEmployee(a.db, w, r)
}

func (a *App) Run() {

	//ch := gohandlers.CORS(gohandlers.AllowedOrigins([]string{"http://localhost:3000"}))

	ch := gohandlers.CORS(gohandlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}),
		gohandlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD","DELETE", "OPTIONS"}),
		gohandlers.AllowedOrigins([]string{"http://localhost:3000"}))

	// create a new server
	s := http.Server{
		Addr:         *bindAddress,                                         // configure the bind address
		Handler:      ch(a.Router),                                         // set the default handler
		ErrorLog:     a.log.StandardLogger(&hclog.StandardLoggerOptions{}), // set the logger for the server
		ReadTimeout:  5 * time.Second,                                      // max time to read request from the client
		WriteTimeout: 10 * time.Second,                                     // max time to write response to the client
		IdleTimeout:  120 * time.Second,                                    // max time for connections using TCP Keep-Alive
	}

	// start the server
	go func() {
		a.log.Info("Starting server on port 9090")

		err := s.ListenAndServe()
		if err != nil {
			a.log.Info("Error starting server: %s\n", err)
			os.Exit(1)
		}
	}()

	// trap sigterm or interupt and gracefully shutdown the server
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	signal.Notify(c, os.Kill)

	// Block until a signal is received.
	sig := <-c
	a.log.Info("Got signal:", sig)

	// gracefully shutdown the server, waiting max 30 seconds for current operations to complete
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	s.Shutdown(ctx)

}
