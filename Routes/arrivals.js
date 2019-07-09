const router = require('express').Router()
let Arrivals = require('../Models/arrivals.model')
let fetch = require("node-fetch")
let Axios = require('axios')

let fetchFlights = () =>{
    const baseUrl = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/KMCO/arr/'
    const appId = '85270bc1'
    const appKey = '3526508e3dbaa843f4d918e5e34b5970'
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
    fetch('https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/KMCO/arr/2019/7/9/17?appId=85270bc1&appKey=3526508e3dbaa843f4d918e5e34b5970&utc=true&numHours=6&carrier=f9')
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
