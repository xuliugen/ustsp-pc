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
  Publisher
}
