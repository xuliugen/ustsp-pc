import { observable, action } from 'mobx'

class SearchStore {
  // talent, project
  @observable type = 'talent'

  @action
  setType(type) {
    this.type = type
  }
}

export default new SearchStore()
