let express = require('express')
app = express()

require('./db-connection')

let Post = require('./models/Post')

app.get("/", async (req,res) => {
    
    let posts = await Post.find({})
    let first = await Post.findOne()
    
    res.render("index.ejs", {posts: posts,
                             first: first
                             })
})


app.listen(8000, () => {
    console.log("Server running on port: ", 8000)
})

