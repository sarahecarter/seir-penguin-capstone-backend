///////////////////
// Dependencies
///////////////////
// get .env variables
require("dotenv").config()
// gives port default value of 3000
const {PORT = 3000, MONGODB_URL} = process.env;
// import express
const express = require("express")
// create app object
const app = express()
// import mongoose
const mongoose = require("mongoose")
// import middleware
const cors = require("cors")
const morgan = require("morgan")

////////////////////////
// Database Connection
////////////////////////
// Establish connection 
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// Connection Events
mongoose.connection
    .on("open", () => console.log("Connected to mongoose"))
    .on("close", () => console.log("Disconnected from mongoose"))
    .on("error", (error) => console.log(error))

///////////////////
// Models
///////////////////
const SymptomSchema = new mongoose.Schema({
    bodyPart: String,
    symptom: String,
    startDate: String,
    severity: {type: Number, min: 1, max: 10},
    notes: String,
    endDate: String
})

const Symptom = mongoose.model("Symptom", SymptomSchema)

///////////////////
// Middleware
///////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

///////////////////
// Routes
///////////////////
// Test route
app.get("/", (req, res) => {
    res.send("hello world")
})

// Index route
app.get("/symptoms", async (req, res) => {
    try {
        res.json(await Symptom.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Create route 
app.post("/symptoms", async (req, res) => {
    try {
        res.json(await Symptom.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Update route
app.put("/symptoms/:id", async (req, res) => {
    try {
        res.json(
            await Symptom.findByIdAndUpdate(req.params.id, req.body, {new: true})
        )
    } catch (error) {
        res.status(400).json(error)
    }
})

// Delete route
app.delete("/symptoms/:id", async (req,res) => {
    try {
        res.json(await Symptom.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})



///////////////////
// Listener
///////////////////
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))