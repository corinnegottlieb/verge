// import { observable, action } from 'mobx'
// const dummyData = require(`../DummyData`)

// class Topic {
//   @observable userID = 1
//   @observable name = ""
//   @observable children = []
//   @observable link = ""
//   @observable relevance = null
//   @observable note = null
//   @observable tracked = false
//   @observable checked = false

//   constructor(value) {
//     this.value = value
//   }

//   @action getTopic = () => {
//     let dataObject = dummyData
//     console.log(dataObject)
//     this.name = dataObject.value.name
//     this.children = dataObject.children
//     this.link = dataObject.value.link
//   }
// }

// let currentTopic = new Topic()

// export default currentTopic

// currentTopic.getTopic()