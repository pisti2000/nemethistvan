const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host: "127.0.0.1",
    port:3307,
    password:"",
    database:"kozutak", 
});
app.listen(3301,() => {
    console.log("server is running on port 3001")
})