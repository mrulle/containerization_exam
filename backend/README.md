# Zay eCommerce

## Setup

* Clone the project
* Install dependencies: `npm install`
* Set environment variables on the project to match the database
    * Check `./package.json`
    * Check Environment variables further down
* Run the project
    * In development mode: `npm run dev`
    * In production mode: `npm start`

## Commands

### Run in production mode

All commands can be found `./package.json`

```sh
npm start
```

### Run in development mode

```sh
npm run dev
```

### Migrate database

```sh
npm run db:migrate
```

### Seed database

```sh
npm run db:seed
```

## Configuration



## Environment Variables

The environment variables should be created on the server runtime

* `PORT` The active port the container is listening on
* `DB_HOSTNAME` The datbase host address
* `DB_USERNAME` The username for the database connection
* `DB_PASSWORD` The password for the database connection
* `DB_DATABASE` The database name

