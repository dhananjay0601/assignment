package main
import (
	"encoding/json" 
	"log"           
	"math/rand"     
	"net/http"      
	"strconv"       
	"github.com/gorilla/mux"
)


type User struct {
	ID     string  `json:"id"`
	Occupation   string  `json:"occupation"`
	Name  string  `json:"name"`
	Contact *Contact `json:"contact"` 
}


type Contact struct {
	Phone string `json:"phone"`
	Email  string `json:"email"`
}


var users []User


func getUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}


func getUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	params := mux.Vars(r) 
	
	for _, item := range users { 
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&User{})
}


func createUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var user User
	_ = json.NewDecoder(r.Body).Decode(&user)
	user.ID = strconv.Itoa(rand.Intn(1000000)) 
	users = append(users, user)
	json.NewEncoder(w).Encode(user)
}

func updateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range users{
		if item.ID == params["id"]{
		users = append(users[:index], users[index+1:]...)
		w.Header().Set("Content-Type", "application/json")
		var user User
		_ = json.NewDecoder(r.Body).Decode(&user)
		user.ID = params["id"]
		users = append(users, user)
		json.NewEncoder(w).Encode(user)
	return
		}
	}
	json.NewEncoder(w).Encode(users)
}


func deleteUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range users{
		if item.ID == params["id"]{
		users = append(users[:index], users[index+1:]...)
		break
		}
	}
	json.NewEncoder(w).Encode(users)
}


func main(){	
	r := mux.NewRouter()
	users = append(users, User{ID: "1", Occupation: "farmer", Name: "Prerit", Contact: &Contact{Phone: "9090756467", Email: "prerit@gmailcom"}})
	users = append(users, User{ID: "2", Occupation: "businessman", Name: "Jay", Contact: &Contact{Phone: "9789556467", Email: "jay@gmailcom"}})
	//creating router handlers which will establish endpoints for our api's
	r.HandleFunc("/api/users", getUsers).Methods("GET")
	r.HandleFunc("/api/users/{id}", getUser).Methods("GET")
	r.HandleFunc("/api/users/{id}", createUser).Methods("POST")
	r.HandleFunc("/api/users/{id}", updateUser).Methods("PUT")
	r.HandleFunc("/api/users/{id}", deleteUser).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8000", r)) 

}
