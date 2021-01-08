const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 8000;

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/test", (req, res) =>{
    res.json({message: "Welcome to node js crud application"});
});


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}.`);
    for(let i  = 0; i < 10; i++){
        console.log("crud program by sesar")
    }
});

