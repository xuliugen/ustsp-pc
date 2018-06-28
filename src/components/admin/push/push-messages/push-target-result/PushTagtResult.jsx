import React from 'react'
import Card from '../../../info/home/common/card/Card'
import { Row, Col, Pagination } from 'antd'
import defaultAvatar from 'src/assets/defaultAvatar.svg'
import './pushTagtResult.css'

export default class PushTagtResult extends React.Component {
  constructor() {
    super()
    this.state = {
      results: [
        {
          name: '孔浩',
          photo: defaultAvatar,
          title: '教授',
          school: '电子科技大学',
          major: '逻辑学'
        },
        {
          name: '孔浩',
          photo: defaultAvatar,
          title: '教授',
          school: '电子科技大学',
          major: '逻辑学'
        },
        {
          name: '孔浩',
          photo: defaultAvatar,
          title: '教授',
          school: '电子科技大学',
          major: '逻辑学'
        },
        {
          name: '孔浩',
          photo: defaultAvatar,
          title: '教授',
          school: '电子科技大学',
          major: '逻辑学'
        },
        {
          name: '孔浩',
          photo: defaultAvatar,
          title: '教授',
          school: '电子科技大学',
          major: '逻辑学'
        },
        {
          name: '孔浩',
          photo: defaultAvatar,
          title: '教授',
          school: '电子科技大学',
          major: '逻辑学'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <div>
          <Row gutter={16}>
            {this.state.results.length !== 0 ? this.state.results.map((item, idx) => {
              return (
                <Col span={8} key={idx} style={{margin: '10px 0'}}>
                  <Card person={item} />
                </Col>
              )
            }) : '暂无相关用户'}
          </Row>
        </div>
        <div styleName="pagination">
          <Pagination defaultCurrent={1} total={30} pageSizw={6} />
        </div>
      </div>
    )
  }
}
