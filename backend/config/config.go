package config

type Config struct {
	DB *DBConfig
}

type DBConfig struct {
	Dialect  string
	Username string
	Password string
	Name     string
	Charset  string
}

func GetConfig() *Config {
	return &Config{
		DB: &DBConfig{
			Dialect:  "tcp(a2nlmysql7plsk.secureserver.net:3306)",
			Username: "eduUSER",
			Password: "N8wfs92@",
			Name:     "EduDB",
			Charset:  "utf8",
		},
	}
}
