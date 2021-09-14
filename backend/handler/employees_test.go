package handler

import (
	"emp-test/model"
	"log"
	"math/rand"
	"strings"
	"testing"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

const alphabet = "abcdefghijklmnopqrstuvwxyz"

func randomEmployeeData() model.Employee {
	return model.Employee{
		Name:   RandomName(),
		City:   RandomPlace(),
		Age:    int(RandomInt(10, 80)),
		Status: false,
	}
}
func init() {
	rand.Seed(time.Now().UnixNano())
}

// RandomInt generates a random integer between min and max
func RandomInt(min, max int64) int64 {
	return min + rand.Int63n(max-min+1)
}

// RandomString generates a random string of length n
func RandomString(n int) string {
	var sb strings.Builder
	k := len(alphabet)

	for i := 0; i < n; i++ {
		c := alphabet[rand.Intn(k)]
		sb.WriteByte(c)
	}

	return sb.String()
}

// RandomName generates a random owner name
func RandomName() string {
	return RandomString(6)
}

// RandomPlace generates a random owner name
func RandomPlace() string {
	return RandomString(10)
}

func TestCreateEmployee(t *testing.T) {

	dsn := "eduUSER:N8wfs92@@tcp(a2nlmysql7plsk.secureserver.net:3306)/EduDB?charset=utf8&parseTime=True"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Error connecting to database", "error", err, db)
	}

	for i := 0; i < 10; i++ {
		employee := randomEmployeeData()
		if err := db.Create(&employee).Error; err != nil {
			log.Println("failed to add data to Database")
			return
		}

		time.Sleep(2000)

	}

}
