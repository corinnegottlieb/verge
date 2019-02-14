const express = require(`express`)
const router = express.Router()
// const data = require(`../../DummyData`)
const Scraper = require(`../scraper`)
const TOR = require(`../models/TOR`)
const Topic = require(`../models/Topic`)
const Tree = require(`../models/Tree`)

// // GET SUBTOPIC HTML FROM WIKIPEDIA PAGE
// router.get(`/subtopic/:searchValue/:subTopicName`, async function(req, res) {
//     const scraper = new Scraper()
//     // console.log(req.params.searchValue)
//     // console.log(req.params.subTopicName)
//     let subTopicHTML = await scraper.getTopicData(req.params.searchValue, req.params.subTopicName)
//     res.send(subTopicHTML)
// })
// GET SUBTOPIC HTML FROM WIKIPEDIA PAGE - works with axios as expected
router.get(`/subtopic/`, async function(req, res) {
    // console.log(req.query)
    const scraper = new Scraper()
    let subTopicHTML = await scraper.getTopicData(req.query.TORName, req.query.subTopic)
    res.send(subTopicHTML)
})

// GET NAME LIST OF ALL SAVED DBs
router.get('/tracked', async function(req, res){
   let trackedTORS = await Tree.find({}).select('name')
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
    let tempArr = await Topic.find({root: req.params.name})
    let toSend = {}
    tempArr.forEach(t => toSend[t.name] = t)
    res.send(toSend)
})

// SAVE NEW TREE IN DB
router.post('/tor', function(req, res){
    // console.log(req.body)
    const tree = req.body.tree
    const topics = req.body.topics
    let valArr = Object.values(topics)
    let toSave
    valArr.forEach(t => {
        toSave = new Topic({
            name: t.name,
            url: t.url,
            level: t.level,
            relevance: t.relevance,
            tracked: t.tracked,
            checked: t.checked,
            note: t.note,
            renderNote: t.renderNote,
            renderMenu: t.renderMenu,
            root: t.root,
            children: t.children
        })
        toSave.save()
    })
    toSave = new Tree({name: tree})
    toSave.save()
    res.end()
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

//update specific property of specific topic of specific tree
router.put(`/tracked/:treeName`, async function(req, res) {
    const updateInfo = req.body
    console.log(updateInfo)
    // const val = updateInfo.propertyVal
    // const property = updateInfo.property
    await Topic.findOneAndUpdate({root: req.params.treeName, name: updateInfo.nodeName},
                                        {[updateInfo.property]: updateInfo.propertyVal})
    res.end()
})

// REMOVE TRACKEDTOR FROM DB
router.delete(`/tracked/:name`, async function(req, res){
    await Topic.deleteMany({root: req.params.name})
    await Tree.findOneAndDelete({name: req.params.name})
    res.end()
})


module.exports = router;