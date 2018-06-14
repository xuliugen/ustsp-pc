import * as dataset from 'src/common/dataset'

const majorItems = dataset.major.map(i => ({
  label: i,
  value: i
}))
majorItems.unshift({
  label: '不限',
  value: ''
})
const Major = {
  category: '学科行业',
  field: 'major',
  items: majorItems
}

const titleItems = dataset.title.map(i => ({
  label: i,
  value: i
}))
titleItems.unshift({
  label: '不限',
  value: ''
})
const Title = {
  category: '职称',
  field: 'title',
  items: titleItems
}

const Type = {
  category: '人才类型',
  field: 'type',
  items: [
    {
      label: '不限',
      value: ''
    },
    {
      label: '教师',
      value: 2
    },
    {
      label: '学生',
      value: 1
    }
  ]
}

const provinceItems = dataset.province.map(i => ({
  label: i,
  value: i
}))
provinceItems.unshift({
  label: '不限',
  value: ''
})
const Province = {
  category: '省份',
  field: 'province',
  items: provinceItems
}

const School = dataset.school

const Subject = {
  category: '学科行业',
  field: 'subject',
  items: majorItems
}

const Oriented = {
  category: '对接倾向',
  field: 'oriented',
  items: [
    {
      label: '不限',
      value: ''
    },
    {
      label: '教师',
      value: '教师'
    },
    {
      label: '学生',
      value: '学生'
    }
  ]
}

const Publisher = {
  category: '发布者分类',
  field: 'type',
  items: [
    {
      label: '不限',
      value: ''
    },
    {
      label: '教师',
      value: 2
    },
    {
      label: '学生',
      value: 1
    },
    {
      label: '企业',
      value: 3
    },
    {
      label: '管理员',
      value: 4
    }
  ]
}

const IndustryCategory = {
  category: '行业分类',
  field: 'industryCategory',
  items: [
    {
      label: '不限',
      value: ''
    }, {
      label: 'A：人类生活需要',
      value: 'A：人类生活需要'
    }, {
      label: 'B：作业运输',
      value: 'B：作业运输'
    }, {
      label: 'C：化学，冶金',
      value: 'C：化学，冶金'
    }, {
      label: 'D：纺织和造纸',
      value: 'D：纺织和造纸'
    }, {
      label: 'E：固定构造',
      value: 'E：固定构造'
    }, {
      label: 'F：机械工程，照明，加热，武器，爆破',
      value: 'F：机械工程，照明，加热，武器，爆破'
    }, {
      label: 'G：物理',
      value: 'G：物理'
    }, {
      label: 'H：电学',
      value: 'H：电学'
    }, {
      label: '其他',
      value: '其他'
    }
  ]
}

const PatentType = {
  category: '专利类型',
  field: 'patentType',
  items: [
    {
      label: '不限',
      value: ''
    }, {
      label: '发明',
      value: '发明'
    }, {
      label: '实用新型',
      value: '实用新型'
    }, {
      label: '外观设计',
      value: '外观设计'
    }, {
      label: '其他',
      value: '其他'
    }
  ]
}

const LegalStatus = {
  category: '法律状态',
  field: 'legalStatus',
  items: [
    {
      label: '不限',
      value: ''
    }, {
      label: '等年登印费',
      value: '等年登印费'
    }, {
      label: '等待恢复',
      value: '等待恢复'
    }, {
      label: '专利权维持',
      value: '专利权维持'
    }, {
      label: '权利终止等恢复',
      value: '权利终止等恢复'
    }, {
      label: '权利失效',
      value: '权利失效'
    }, {
      label: '其他',
      value: '其他'
    }
  ]
}

export {
  Major,
  Title,
  Province,
  School,
  Type,
  Subject,
  Oriented,
  Publisher,
  IndustryCategory,
  PatentType,
  LegalStatus
}
