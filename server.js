console.log("Running server...")
const express = require("express")
const app=express()

app.listen(3000)

app.get("/", (req,res) => {
    res.send({"hello":"world"})
})
app.get("/500", (req,res) => {
    res.sendStatus(500)
})
app.get("/test", (req,res) => {
    res.status(200).send({"test":"ok"})
})