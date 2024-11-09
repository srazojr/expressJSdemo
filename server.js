console.log("Running server...")
const express = require("express")
const app = express()

app.listen(3000)
//public
app.use(express.static("public"))
app.set('view engine', 'ejs')
const userRouter = require("./routes/api.js")
app.use(logger)
app.use('/api', userRouter)

app.get("/helloworld", (req, res) => {
    res.send({ "hello": "world" })
})
app.get("/500", (req, res) => {
    res.sendStatus(500)
})
app.get("/test", (req, res) => {
    res.status(200).send({ "test": "ok" })
})
//views
app.get("/index", (req, res) => {
    res.render('index', {
        text: "test"
    })
})
//middleware
app.get("/middleware", middleware, (req, res) => {

})
function middleware(req, res, next) {
    res.send({ middleware: "test" })
    next()
}
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}
//getting forms
app.use(express.urlencoded({ extended: true }));
app.get("/users/new", (req, res) => {
    res.render("users/new", { firstName: "First Name" })
})
app.post("/users", (req, res) => {
    console.log(req.body.firstName)
    res.render("users/submitted", { firstName: req.body.firstName })
})

//using json
app.use(express.json())

//queries
app.get("/queries", (req, res) => {
    console.log(req.query.name)
})