let mongoose = require('mongoose')

DB_STRING = "mongodb://localhost/sandboxDB"

mongoose.connect(DB_STRING)
    .then( x => {
        console.log("MongoDB connected")
    })
