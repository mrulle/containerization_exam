module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "zay_dev",
    host: process.env.DB_HOSTNAME || "127.0.0.1",
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
    username: process.env.DB_USERNAME || "zay_prod",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || "zay_dev",
    host: process.env.DB_HOSTNAME || "db",
    dialect: "mysql"
  }
}
