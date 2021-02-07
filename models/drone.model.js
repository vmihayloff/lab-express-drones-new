const mongoose = require('mongoose')

//creating the drone schema//

let DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

//creating the model

let DroneModel = mongoose.model('mydrone', DroneSchema)

//exporting the model

module.exports = DroneModel