//Import Router & Model
const router = require('express').Router()
let Received = require('../Models/received.model')


//Set Route
router.route('/').get((req,res)=>{
    Received.find()
        .then(crews => res.json(crews))
        .catch(err=> res.status(400).json('Error:' + err))
})
router.route('/delete').get((req,res)=>{
    Received.find().deleteMany()
        .then(data=>{
            res.status(200).json(data)
        })
    
        
        
})


router.route('/add').post((req,res)=>{
    const airline = req.body.airline
    const flightNumber = req.body.flightNumber
    const arrivalDate = req.body.arrivalDate
    
    const newCrew = new Received({
        airline,
        flightNumber,
        arrivalDate,    
    })

    newCrew.save()
        .then(()=> res.json('Crew Added!'))
        .catch(err => res.status(400).json('Error' + err))
})


module.exports = router
