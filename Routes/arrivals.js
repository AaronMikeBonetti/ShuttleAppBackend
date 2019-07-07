const router = require('express').Router()
let Arrivals = require('../Models/arrivals.model')
let fetch = require("node-fetch")
let Axios = require('axios')

let fetchFlights = () =>{
    const baseUrl = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/KMCO/arr/'
    const appId = '91671c55'
    const appKey = '75376fdd738335ffa0f2b61ecac5dd03&utc'
    const flights = []
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => {
       return data
    })
    .catch(err=>{
        console.log(err)
    })
    
}

router.route('/').get((req,res)=>{
    const flightsArray = []
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
   
    .then((data)=>{
        
        res.setHeader('Content-Type','application/json')
    

    res.end(JSON.stringify(data))
    })
    .catch(err=>{
        console.log(err)
    })

    
    
    })


module.exports = router
