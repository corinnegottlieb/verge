import { observable, action } from 'mobx';
import Requester from './Requester';
const requester = new Requester();

class SearchHandler {
  @observable searchInput = ''
  
  @action handleInput = (value) => {
    this.searchInput = value
    console.log(this.searchInput)
  }
  // @action getNewTOR = async (searchValue) => {
  //   let topicData = await requester.getNewTopicData(searchValue)
  //   console.log(topicData)
  //   // let TOR = new Topic(topicData)
  //   // console.log(TOR)
  //   // this.currentTOR = TOR
  // }
}

const searchHandler = new SearchHandler()

export default searchHandler;

