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
    @observable currentTOR = { name: '', children: [] }
    @observable savedTORS = []
    @observable searchValue = ''
    @observable currentNote = ''

    @action createTopic = topic => {
        let newTopic = new Topic(topic)
        return newTopic
    }
    @action handleInput = (value) => {
        this.currentNote = value
    }
    @action handleSearchInput = (value) => {
        this.searchValue = value
        // console.log(this.searchValue)
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
    }

    @action findTopicByNameAndMarkAsRead = (name, topic) => {
        const currentTopic = topic ? topic : this.currentTOR
        if (currentTopic.name === name) {
            currentTopic.checked = !currentTopic.checked
        } else if (currentTopic.children) {
            currentTopic.children.forEach(c => {
                this.findTopicByNameAndMarkAsRead(name, c)
            })
        }
    }

    @action findTopicByNameAndAddNote = (name, topic) => {
        const currentTopic = topic ? topic : this.currentTOR
        if (currentTopic.name === name) {
            currentTopic.note = this.currentNote
        } else if (currentTopic.children) {
            currentTopic.children.forEach(c => {
                this.findTopicByNameAndAddNote(name, c)
            })
        }
    }

    @action findTopicByNameAndRemove = (name, topic, parent) => {
        const currentParent = parent ? parent : null
        const currentTopic = topic ? topic : this.currentTOR
        if (currentTopic.name === name) {
            let index = currentParent.children.indexOf(currentTopic)
            currentParent.children.splice(index, 1)
        } else if (currentTopic.children) {
            let currentParent = currentTopic
            currentTopic.children.forEach(c => {
                this.findTopicByNameAndRemove(name, c, currentParent)
            })
        }
    }

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
            name: this.currentTOR.name,
            level: this.currentTOR.level,
            children: this.currentTOR.children,
            url: this.currentTOR.url,
            relevance: this.currentTOR.relevance,
            tracked: this.currentTOR.tracked,
            checked: this.currentTOR.checked,
            note: this.currentTOR.note,
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