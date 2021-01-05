const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

var corsOptions = {
    origin: "http://localhost:8000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

