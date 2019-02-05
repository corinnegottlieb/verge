const express = require(`express`)
const router = express.Router()

const data = require(`../../DummyData`)
const Scraper = require(`../scraper`)
const TOR = require(`../models/TOR`)


// GETS LIST OF SAVED TREE NAMES FROM DB
router.get('/tracked', async function(req, res){
   let trackedTORS = await TOR.find({}).select('name')
        res.send(trackedTORS)    
    }) 

// // GETS NEW TOPIC INFO FROM USER INPUT
router.get(`/topic/:searchValue`, async (req, res) => {
    const searchQuery = req.params.searchValue
    const scraper = new Scraper()
    const topicObject = await scraper.getData(searchQuery)
    res.send(topicObject)
})

// GETS SPECIFIC SAVED TOR FROM DB
router.get('/tracked/:name', async function (req, res) {
    let toSend = await TOR.findOne({name: req.params.name})
    res.send(toSend)
})



// SAVE NEW TREE IN DB
router.post('/tor', function(req, res){
    console.log(req.body)
    let toSave = new TOR(req.body)
    toSave.save()
    res.send(toSave)
})

// UPDATE EXISTING TRACKEDTOR IN DB
router.put('/tracked', function(req, res){
    let toUpdate = new TOR(req.body)
    console.log(toUpdate.name)
    TOR.findOneAndDelete({name: toUpdate.name},function(err, data) {
        toUpdate.save()
        res.end()
    })
})

// REMOVE TRACKEDTOR FROM DB
router.delete(`/tracked/:name`, function(req, res){
    TOR.findOneAndDelete({name: req.params.name}, function(err, found) {
        console.log(`deleted this object from db: ${found}`)
    })
    res.end()
})


module.exports = router;