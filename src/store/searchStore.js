import { observable, action, reaction } from 'mobx'
import { TalentApi } from 'src/ajax'

const reqTemplate = {
  major: '',
  school: '',
  title: '',
  type: '',
  condition: ''
}

class SearchStore {
  // talent, project
  @observable type = 'talent'
  @observable content = ''
  @observable conditions = []
  @observable req = {}
  @observable pageSize = 10
  @observable currentPage = 1
  @observable result = []

  constructor() {
    this.req = {
      ...reqTemplate,
      condition: this.content
    }
    this.onConditionChange()
  }

  onConditionChange() {
    reaction(
      () => JSON.stringify(this.conditions),
      conditionsStr => {
        const conditions = JSON.parse(conditionsStr)
        const req = {}
        conditions.forEach(({ field, value, notCondition }) => {
          if (!notCondition) {
            req[field] = value
          }
        })
        this.req = {
          ...reqTemplate,
          ...req,
          pageSize: this.pageSize,
          currentPage: this.currentPage
        }
        this.dispatchSearch()
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

  async dispatchSearch() {
    try {
      const res = await TalentApi.searchTalents(this.req)
      this.result = res.data
    } catch (e) {
      console.log(e)
    }
  }
}

export default new SearchStore()
