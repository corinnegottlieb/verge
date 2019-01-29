const express = require(`express`)
const router = express.Router()

const data=require(`../../DummyData`)

const Topic = require(`../models/Topic`)

router.get(`/tree`, (req, res) => {
let tree= data.dummydata
console.log(tree)

    })


router.get('/trees', async function(req, res){
    let trees = await Topic.find({})

        res.send(trees) 
})

router.post('/tree', function(req, res){
    let tree = new Topic(req.body)
    tree.save()
    res.send(tree)
})

router.put('/tree/:id', async function(req, res){
  let tree = await Topic.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(tree)
})

router.delete

// post route for relevance collection

module.exports = router