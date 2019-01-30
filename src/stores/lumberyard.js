import { observable, action } from 'mobx'
import Requester from './Requester';
const requester = new Requester()

class Topic {
    @observable userID = 1
    @observable relevance = null
    @observable note = null
    @observable tracked = false
    @observable checked = false
    

    constructor(value) {
        this.value = value
    }
}


class Forest {
    @observable currentTOR = {}
    @observable savedTORS = []


    @action getNewTOR = async () => {
        let topicData = await requester.getNewTopicData()
        console.log(topicData)
        let TOR = new Topic(topicData)
        console.log(TOR)
        this.currentTOR = TOR
    }

    @action getAllTrackedTORs = async () => {
        let trackedTORs = await requester.getAllTrackedTORs()
        this.savedTORS = trackedTORs
    }
    @action getTORData = async ()=>{
        let TOR = await requester.getTORData()
        this.currentTOR = TOR
    }
    @action trackTOR = async () => {
        await requester.trackTOR()
    }

    @action updateTrackedTOR = async () => {
        let TOR = this.currentTOR.id
        await requester.updateTrackedTOR(TOR)
    }

    @action untrackTOR = async ()=>{
        let TOR = this.currentTOR.id
        await requester.untrackTOR(TOR)
    }

    
}

let verge = new Forest()

let TOR = async()=>{
await verge.getNewTOR()
console.log(verge.currentTOR)}

TOR()


export default verge



