import knex from "knex";

const env = process.env.NODE_ENV || "development";
const config = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "root",
      database: "asto_labs",
    },
  },
};

const db = knex(config[env]);

db.raw("SELECT 1+1 as result")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error("Failed to connect to database:", err.message);
  });

export default db;
