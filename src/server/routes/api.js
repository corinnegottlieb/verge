const express = require(`express`)
const router = express.Router()

const data=require(`../../DummyData`)

const Topic = require(`../models/TOR`)


// GETS LIST OF SAVED TREE NAMES FROM DB
router.get('/tracked', async function(req, res){
   let trackedTORSs = await Topic.find({}).select('id name')
        res.send(trackedTORSs)    
    }) 


// GETS NEW TOPIC INFO FROM USER INPUT
router.get(`/topic/dummyData`, (req, res) => {
    // request to the Guyscraper using {req.params.topicName}, (error, response, body) => {
        // let data = JSON.parse(body)
        // res.send(data)
        let TOR = data
console.log(TOR)
res.send(TOR)
    })


 // GETS SPECIFIC SAVED TOR FROM DB
router.get('/tracked/:id', async function(req, res){  
   let TOR = Topic.findById(req.params.id).exec()
         res.send(TOR)    
     }) 


// SAVE NEW TREE IN DB
router.post('/topic', function(req, res){
    let TOR = new Topic(req.body)
    TOR.save()
    res.send(TOR)
})

// UPDATE EXISTING TRACKEDTOR IN DB
router.put('/tracked/:id', async function(req, res){
  let tree = await Topic.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(tree)
})

// REMOVE TRACKEDTOR FROM DB
router.delete(`/tracked/:id`, function(req, res){
    Topic.findByIdAndRemove(req.params.id).exec()
    res.send(`Topic deleted from DB`)
})

// post route for relevance collection ** 

module.exports = router