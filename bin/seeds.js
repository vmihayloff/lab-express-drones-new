// Iteration #1

//require Mongoose and DB
const mongoose = require('mongoose')
require('../configs/db.config.js')

//require the model

let DroneModel = require('../models/drone.model.js')

//seeding the database

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  DroneModel.create(drones)
  .then((output) => {
      console.log('Seeding was successful', output)
      //closing the connection after success
      mongoose.connection.close()
  })
  .catch((error) => {
      console.log('Seeding was not successful', error)
  })




