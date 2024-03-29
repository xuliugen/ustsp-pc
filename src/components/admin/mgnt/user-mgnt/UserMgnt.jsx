import React from 'react'
import { Table, Icon, Divider } from 'antd'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">增加</a>
      <Divider type="vertical" />
      <a href="#">删除</a>
      <Divider type="vertical" />
      <a href="#" className="ant-dropdown-link">
        更多 <Icon type="down" />
      </a>
    </span>
  )
}]

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}]

export default class UserMgnt extends React.Component {
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}
