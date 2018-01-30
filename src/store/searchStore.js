import { observable, action, reaction } from 'mobx'
import { TalentApi } from 'src/ajax'

class SearchStore {
  // talent, project
  @observable type = 'talent'
  @observable content = ''
  @observable conditions = []
  @observable result = []

  constructor() {
    reaction(
      () => JSON.stringify(this.conditions),
      conditionsStr => {
        const conditions = JSON.parse(conditionsStr)
        let req = {
          major: '',
          school: '',
          title: '',
          type: '',
          condition: this.content
        }
        conditions.forEach(({ field, value }) => {
          req = {
            ...req,
            [field]: value
          }
        })
      }
    )
  }

  @action
  setType(type) {
    this.type = type
  }

  @action
  addCondition(condition, isMulti) {
    const { field, value } = condition
    if (!value) {
      this.conditions = this.conditions.filter(condition => {
        return !(condition.field === field)
      })
      return
    }
    if (isMulti) {
      this.conditions.push(condition)
    } else {
      const sameIdx = this.conditions.findIndex(condition => {
        return condition.field === field && condition.value === value
      })
      if (sameIdx !== -1) {
        return
      }
      const idx = this.conditions.findIndex(condition => {
        return condition.field === field
      })
      if (idx !== -1) {
        this.conditions.splice(idx, 1, condition)
      } else {
        this.conditions.push(condition)
      }
    }
  }

  @action
  removeCondition({field, value}) {
    this.conditions = this.conditions.filter(condition => {
      return !(condition.field === field && condition.value === value)
    })
  }

  async dispatchSearch(req) {
    try {
      const res = await TalentApi.searchTalents(req)
      this.result = res.data
    } catch (e) {
      console.log(e)
    }
  }
}

export default new SearchStore()
