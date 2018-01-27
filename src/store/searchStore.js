import { observable, action } from 'mobx'

class SearchStore {
  // talent, project
  @observable type = 'talent'
  @observable conditions = []

  @action
  setType(type) {
    this.type = type
  }

  @action
  addCondition(category, field, value, isMulti) {
    if (!value) {
      this.conditions = this.conditions.filter(condition => {
        return !(condition.field === field)
      })
      return
    }
    const condition = {
      category,
      field,
      value
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
  removeCondition(field, value) {
    this.conditions = this.conditions.filter(condition => {
      return !(condition.field === field && condition.value === value)
    })
  }
}

export default new SearchStore()
