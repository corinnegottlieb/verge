const express = require(`express`)
const router = express.Router()
// const data = require(`../../DummyData`)
const Scraper = require(`../scraper`)
const TOR = require(`../models/TOR`)

// GET SUBTOPIC HTML FROM WIKIPEDIA PAGE
router.get(`/subtopic/:searchValue/:subTopicName`, async function(req, res) {
    const scraper = new Scraper()
    // console.log(req.params.searchValue)
    // console.log(req.params.subTopicName)
    let subTopicHTML = await scraper.getTopicData(req.params.searchValue, req.params.subTopicName)
    res.send(subTopicHTML)
})

// GET NAME LIST OF ALL SAVED DBs
router.get('/tracked', async function(req, res){
   let trackedTORS = await TOR.find({}).select('name')
        res.send(trackedTORS)    
    }) 

// GETS NEW SEARCHQUERY FROM WIKIPEDIA
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