import { observable, action } from 'mobx';
import Requester from './Requester';
const requester = new Requester();

class Topic {
    @observable userID = 1
    @observable relevance = null
    @observable note = null
    @observable tracked = false
    @observable checked = false
    constructor(value) {
        this.value = value
    }

    @action handleNoteInput = value => {
        this.note = value
    }
}

class LumberYard {
    @observable currentTOR = {name:'', children:[]}
    @observable savedTORS = []
    @observable searchValue = ''

    @action createTopic = topic => {
        let newTopic = new Topic(topic)
        return newTopic
    }
    @action handleInput = (value) => {
        this.searchValue = value
        console.log(this.searchValue)
    }
    @action getNewTOR = async () => {
        let topicData = await requester.getNewTopicData(this.searchValue)
        console.log(topicData)
        this.currentTOR = topicData
        console.log(this.currentTOR)
    }
    @action findTopicByName = (name, topic) => {
        const currentTopic = topic ? topic : this.currentTOR
        if (currentTopic.name === name) {
            currentTopic.menu = !currentTopic.menu
        } else if (currentTopic.children) {
            currentTopic.children.forEach(c => {
                this.findTopicByName(name, c)
            })
        } 
        // else {
        //     return
        // }
    }

    @action findTopicByNameAndMarkAsRead = (name, topic) => {
        const currentTopic = topic ? topic : this.currentTOR
        if (currentTopic.name === name) {
            currentTopic.checked = !currentTopic.checked
        } else if (currentTopic.children) {
            currentTopic.children.forEach(c => {
                this.findTopicByNameAndMarkAsRead(name, c)
            })
        } }

    @action getAllTrackedTORs = async () => {
        let trackedTORs = await requester.getAllTrackedTORs()
        this.savedTORS = trackedTORs
    }
    @action getTORData = async () => {
        let TOR = await requester.getTORData()
        this.currentTOR = TOR
    }
    @action trackTOR = async () => {
        this.currentTOR.tracked = !this.currentTOR.tracked

        let newTOR = {
            value: {
                name: this.currentTOR.value.value.name,
                url: this.currentTOR.value.value.link,
                relevance: this.currentTOR.relevance,
                tracked: this.currentTOR.tracked,
                checked: this.currentTOR.checked,
                note: this.currentTOR.note
            },
            children: this.currentTOR.value.children
        }
        await requester.trackTOR(newTOR)

    }
    @action updateTrackedTOR = async () => {
        let TOR = this.currentTOR.id
        await requester.updateTrackedTOR(TOR)
    }
    @action untrackTOR = async () => {
        let TOR = this.currentTOR.id
        await requester.untrackTOR(TOR)
    }

    // @action check = ()=>{
    //     this.currentTOR.checked = !this.currentTOR.checked
    //     console.log(this.currentTOR)
    // }
}
// let verge = new Forest()
// let TOR = async () => {
//     await verge.getNewTOR()
//     console.log(verge.currentTOR)
// }
// TOR()

// verge.getNewTOR()
// export default verge

const lumberYard = new LumberYard()

export default lumberYard;