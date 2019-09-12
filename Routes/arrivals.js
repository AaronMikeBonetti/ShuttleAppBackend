const router = require('express').Router()
let Arrivals = require('../Models/arrivals.model')
let fetch = require("node-fetch")
let Axios = require('axios')

let configCurrentTimeInput = () =>{
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth() + 1
    let currentDay = currentDate.getDate()
    let finalDate = `${currentYear}/${currentMonth}/${currentDay}/17`
    return finalDate
}

// let fetchFlights = () =>{
//     const baseUrl = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/KMCO/arr/'
//     const appId = '85270bc1'
//     const appKey = '3526508e3dbaa843f4d918e5e34b5970'
//     const airlines = ['f9','aa','ua','as']
//     const flights = airlines.map(airline=>{
//         fetch(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/KMCO/arr/2019/09/12/17?appId=85270bc1&appKey=3526508e3dbaa843f4d918e5e34b5970&utc=true&numHours=6&carrier=f9`)
//     .then((response) => response.json())
//     .then((data) => {
//        return flights.push(data)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
//     })
//     .then((response) => response.json())
//     .then((data) => {
//        return flights.push(data)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
    
// }
router.route('/').get((req,res)=>{
    Arrivals.find()
        .then(flights => res.json(flights))
        .catch(err=> res.status(400).json('Error:' + err))
})
 router.route('/fetch').post((req,res)=>{
    const appId = '85270bc1'
    const appKey = '3526508e3dbaa843f4d918e5e34b5970'
    let airlines  = ['f9','ua','as','aa']
    let flights = []
    // airlines.forEach((airline)=>{
    //     fetch(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/KMCO/arr/${configCurrentTimeInput()}?appId=85270bc1&appKey=3526508e3dbaa843f4d918e5e34b5970&utc=true&numHours=6&carrier=${airline}`)
    // .then((response) => response.json())
   
    // .then((data)=>{   
    //     flights.push(data)
    // })

    // .catch(err=>{
    //     console.log(err)
    //     })
    // })
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//    .then(response => response.json())
//    .then(json => {
//       flights.push(json)
      
//     Axios.post('https://shuttleappbackend.herokuapp.com/arrivals', {})
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
//       res.end(JSON.stringify(flights))
//   })
//   .catch(err=>console.log(err))

//     Axios.post('https://shuttleappbackend.herokuapp.com/arrivals', flights)
//     .then(res=>console.log("data sent"))
//     .catch(err=>console.log(err))

  
  const data = req.body
  
  const newData = new Arrivals({
     data 
  })

  data.save()
      .then(()=> res.json('data Added!'))
      .catch(err => res.status(400).json('Error' + err))
})

    



module.exports = router
