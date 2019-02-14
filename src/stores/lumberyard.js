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

    @action updateVal = (nodeName, property, value) => {
        this.currentTOR[nodeName][property] = value
    }
    @action handleSearchInput = (value) => {
        this.searchValue = value
    }
    @action getNewTOR = async () => {
        let topicData = await requester.getNewTopicData(this.searchValue)
        this.currentRoot = this.searchValue
        this.currentTOR = topicData
    }
    @action toggleProperty = (topicName, property) => {
        this.currentTOR[topicName][property] = !this.currentTOR[topicName][property]
    }
    @action updateProperty = (nodeName, property) => {
        const propertyVal = this.currentTOR[nodeName][property]
        const updateInfo = {
            nodeName: nodeName,
            property: property,
            propertyVal: propertyVal
        }
        // console.log(updateInfo)
        requester.updateProperty(this.currentRoot, updateInfo)
    }
    @action getTORList = async () => {
        this.savedTORS = await requester.getAllTrackedTORs()
    }
    @action cleanTree = (nodeName) => {
        const currentNode = this.currentTOR[nodeName]
        if (currentNode.children) {
            currentNode.children.forEach((c, i) => {
                if (this.currentTOR[c]) {
                    this.cleanTree(c)
                } else {
                    currentNode.children.splice(i, 1)
                }
            })
        }
    }
    @action removeTopic = (nodeName) => {
        delete this.currentTOR[nodeName]
        this.cleanTree(this.currentRoot)
    }
    @action updateTOR = async () => {
        if (this.currentTOR.tracked) {
            await requester.updateTrackedTOR(this.currentTOR)
        }
    }
    @action toggleTracked = () => {
        this.currentTOR[this.currentRoot].tracked = !this.currentTOR[this.currentRoot].tracked
        if (this.currentTOR[this.currentRoot].tracked) {
            requester.trackTOR(this.currentRoot, this.currentTOR)
        } else {
            requester.untrackTOR(this.currentRoot)
        }
    }
    @action getAllTrackedTORs = async () => {
        let trackedTORs = await requester.getAllTrackedTORs()
        this.savedTORS = trackedTORs
    }
    @action getTORData = async (name) => {
        const response = await requester.getTORData(name)
        this.currentRoot = name
        this.currentTOR = response
        // console.log(this.currentTOR)
    }
    // @action trackTOR = async () => {
    //     this.currentTOR[this.currentRoot].tracked = !this.currentTOR[this.currentRoot].tracked
    //     await requester.trackTOR(this.currentTOR)
    // }
    // @action updateTrackedTOR = async () => {
    //     let TOR = this.currentTOR.id
    //     await requester.updateTrackedTOR(TOR)
    // }
    // @action untrackTOR = async () => {
    //     let TOR = this.currentTOR.id
    //     await requester.untrackTOR(TOR)
    // }

}

const lumberYard = new LumberYard()

export default lumberYard;