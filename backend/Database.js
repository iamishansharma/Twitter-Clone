const mongoose = require("mongoose");
require("dotenv").config();

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(`${process.env.DB_CONNECTION_STRING}`, { useNewUrlParser: true })
      .then(() => {
        console.log("MongoDB connection successful");
      })
      .catch(err => {
        console.log("MongoDB connection error: " + err);
      });
  }
}

module.exports = new Database();
