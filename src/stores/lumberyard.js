import { observable, action, computed } from 'mobx';
import Requester from './Requester';
import dummyData from '../DummyData'
const requester = new Requester();

class LumberYard {
    currentRoot = ''
    @observable currentTOR = {'': {name: ''}}
    // @observable currentRoot = 'abraham lincoln'
    // @observable currentTOR = dummyData
    @observable savedTORS = []
    @observable searchValue = ''
    @observable showNote = false

    @action handleInput = (value) => {
        this.currentNote = value
    }
    @action handleSearchInput = (value) => {
        this.searchValue = value
    }
    
    @action getNewTOR = async () => {
        let topicData = await requester.getNewTopicData(this.searchValue)
        this.currentRoot = this.searchValue
        this.currentTOR = topicData
    }
    @action toggleMenu = (currentTopic) => {
        currentTopic.menu = !currentTopic.menu
    }
    @action findTopicByName = (name, func, topic) => {
        const currentTopic = topic ? topic : this.currentTOR
        if (currentTopic.name === name) {
            func(currentTopic)
        } else if (currentTopic.children) {
            currentTopic.children.forEach(c => {
                this.findTopicByName(name, func = func, topic = c)
            })
        } 
    }
    @action getTORList = async () => {
        this.savedTORS = await requester.getAllTrackedTORs()
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

    @action findTopicByNameAndAddNote = (name, newNote, topic) => {
        const currentTopic = topic ? topic : this.currentTOR
        if (currentTopic.name === name) {
            currentTopic.note = newNote
        } else if (currentTopic.children) {
            currentTopic.children.forEach(c => {
                this.findTopicByNameAndAddNote(name, newNote, c)
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
    @action updateTOR = async () => {
        if (this.currentTOR.tracked) {
            await requester.updateTrackedTOR(this.currentTOR)
        }
    }
    @action toggleTracked = () => {
        this.currentTOR.tracked = !this.currentTOR.tracked
        if (this.currentTOR.tracked) {
            requester.trackTOR(this.currentTOR)
        } else {
            requester.untrackTOR(this.currentTOR.name)
        }
    }
    @action getAllTrackedTORs = async () => {
        let trackedTORs = await requester.getAllTrackedTORs()
        this.savedTORS = trackedTORs
    }
    @action getTORData = async (name) => {
        let TOR = await requester.getTORData(name)
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

}

const lumberYard = new LumberYard()

export default lumberYard;