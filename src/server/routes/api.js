const express = require(`express`)
const router = express.Router()

const data = require(`../../DummyData`)
const Scraper = require(`../scraper`)
const TOR = require(`../models/TOR`)


// GETS LIST OF SAVED TREE NAMES FROM DB
router.get('/tracked', async function(req, res){
   let trackedTORSs = await Topic.find({}).select('id name')
        res.send(trackedTORSs)    
    }) 

// // GETS NEW TOPIC INFO FROM USER INPUT
router.get(`/topic/:searchValue`, async (req, res) => {
    const searchQuery = req.params.searchValue
    const scraper = new Scraper()
    const topicObject = await scraper.getData(searchQuery)
    res.send(topicObject)
})

// GETS SPECIFIC SAVED TOR FROM DB
router.get('/tracked/:id', async function (req, res) {
    let TOR = Topic.findById(req.params.id).exec()
    res.send(TOR)
})



// SAVE NEW TREE IN DB
router.post('/tor', function(req, res){
    console.log(req.body)
    let toSave = new TOR(req.body)
    toSave.save()
    res.send(toSave)
})

// UPDATE EXISTING TRACKEDTOR IN DB
router.put('/tracked/:id', async function(req, res){
  let tree = await Topic.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(tree)
})

// REMOVE TRACKEDTOR FROM DB
router.delete(`/tracked/:name`, function(req, res){
    TOR.findOneAndDelete({name: req.params.name}, function(err, found) {
        console.log(`deleted this object from db: ${found}`)
    })
    res.end()
})

// post route for relevance collection ** 

module.exports = router