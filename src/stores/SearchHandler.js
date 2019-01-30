import { observable, action } from 'mobx'

class SearchHandler {
  @observable value
  @action handleInput = value => {
    this.value = value
  }
}

export default new SearchHandler()

