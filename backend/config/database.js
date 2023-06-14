module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "1SecretP@ss",
    database: process.env.DB_DATABASE || "zay_dev",
    host: process.env.DB_HOSTNAME || "db",
    dialect: "mysql"
  },
  test: {
    username: process.env.DB_USERNAME || "zay_test",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || "zay_dev",
    host: process.env.DB_HOSTNAME || "db",
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USERNAME || "wrong_username",
    password: process.env.DB_PASSWORD || "wrong_password",
    database: process.env.DB_DATABASE || "wrong_database",
    host: process.env.DB_HOSTNAME || "db",
    dialect: "mysql"
  }
}
