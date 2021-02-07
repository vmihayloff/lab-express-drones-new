const express = require('express');

// require the Drone model here

const DroneModel = require('../models/drone.model.js')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
  .then((drones) => {
  res.render('drones/list.hbs', {drones})
  })
  .catch((error) => {
    console.log('Something went wrong when displaying', error)
  })
})

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {DroneName, DronePropellers, DroneMaxSpeed} = req.body
  let NewDrone = {
    name: DroneName,
    propellers: DronePropellers,
    maxSpeed: DroneMaxSpeed
  }
  DroneModel.create(NewDrone)
  .then(() => {
    res.redirect('/drones')
  })
  .catch(() => {
    res.render('drones/create-form.hbs')
  })
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id

  DroneModel.findById(id)
  .then((drones) => {
    res.render('drones/update-form.hbs', {drones})
  })
  .catch(() => {
    console.log('Edit failed')
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id
  const {DroneName, DronePropellers, DroneMaxSpeed} = req.body

  let EditedDrone = {
    name: DroneName,
    propellers: DronePropellers,
    maxSpeed: DroneMaxSpeed
  }

  DroneModel.findByIdAndUpdate (id, EditedDrone)
  .then (() => {
    res.redirect('/drones')
  })
  .catch (() => {
    res.render('/drones/:id/edit')
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  let id = req.params.id

  DroneModel.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/drones')
  })
  .catch(() => {
    console.log('Something wrong happened when deleting the drone')
  })
});

module.exports = router;
