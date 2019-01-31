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
    @observable savedTORs = []
    // @observable searchValue

    @action handleInput = value => {
        this.searchValue = value
    }
    @action getNewTOR = async () => {
        let topicData = await requester.getNewTopicData()
        console.log(topicData)
        let TOR = new Topic(topicData)
        console.log(TOR)
        this.currentTOR = TOR
    }
    @action getAllTrackedTORs = async () => {
        let trackedTORs = await requester.getAllTrackedTORs()
        // console.log(trackedTORs)
      this.savedTORs = trackedTORs
   
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
}
let verge = new Forest()
// let TOR = async () => {
//     await verge.getNewTOR()
//     console.log(verge.currentTOR)
// }
// TOR()

verge.getNewTOR()
export default verge

