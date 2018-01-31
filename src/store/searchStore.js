import { observable, action, reaction, runInAction } from 'mobx'
import { TalentApi, ProjectApi } from 'src/ajax'

const talTemplate = {
  major: '',
  school: '',
  title: '',
  type: ''
}

const proTemplate = {
  subject: '',
  oriented: '',
  type: ''
}

class SearchStore {
  // talent, project
  @observable type = 'talent'
  @observable content = ''
  @observable conditions = []
  @observable req = {}
  @observable pageSize = 5
  @observable currentPage = 1
  @observable result = {
    data: []
  }

  constructor() {
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
        this.dispatchSearch()
      }
    )
  }

  @action
  setType(type) {
    this.type = type
    this.content = ''
    this.conditions = []
    this.pageSize = 10
    this.currentPage = 1
    this.req = {}
    this.result = {
      data: []
    }
  }

  @action
  setCurrentPage(currentPage) {
    this.currentPage = currentPage
  }

  @action
  setContent(content) {
    this.content = content
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
    const req = {
      condition: this.content,
      pageSize: this.pageSize,
      currentPage: this.currentPage,
      ...this.req
    }
    try {
      let res = {
        data: []
      }
      switch (this.type) {
        case 'talent':
          this.req = {
            ...talTemplate,
            ...req
          }
          res = await TalentApi.searchTalents(this.req)
          break
        case 'project':
          this.req = {
            ...proTemplate,
            ...req
          }
          res = await ProjectApi.searchProjects(this.req)
          break
        default:
          break
      }
      runInAction(() => {
        this.result = res.data
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export default new SearchStore()
