const express = require('express')
const mongoose = require('mongoose')
const PORT = 7000

const app = express()
app.use(express.json())

const user = require('./routes/user')

const url = "mongodb://localhost:27017/";
mongoose.connect(url, function (data, err) {
    if (err) {
        console.log(err);
        return;
    } else if (data) {
        console.log(`Database is connected`);
        return;
    }
})

app.use("/", user);

app.listen(PORT, () => { `Server run on ${PORT}` }, "127.0.0.71")
