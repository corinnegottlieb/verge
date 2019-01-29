import { observable, action, computed } from 'mobx'

class Topic {
    @observable userID = 1
    @observable name
    @observable children = []
    @observable relevance = null
    @observable note = null
    @observable tracked = false
    @observable checked = false

    constructor(name) {
        this.name = name
    }
}


// class TrackedTORS {
//     @observable topics = []
//     @observable length

// }


export default topic




