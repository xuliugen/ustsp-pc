import React from 'react'
import Card from '../../../info/home/common/card/Card'
import { Row, Col, Pagination } from 'antd'
import './pushTagtResult.css'

export default class PushTagtResult extends React.Component {
  onPageChange = () => {
    this.props.setTargetsPage()
  }

  render() {
    const { targets, targetsPage } = this.props
    return (
      <div>
        <div>
          <Row gutter={16}>
            {targets.length > 0 && targets.map((item) => {
              return (
                <Col span={8} key={item.userId} style={{margin: '10px 0'}}>
                  <Card person={item} />
                </Col>
              )
            })}
          </Row>
        </div>
        {targets.length > 0 &&
          <div styleName="pagination">
            <Pagination current={targetsPage.page} total={targets.length} pageSize={targetsPage.row}
              onChange={this.onPageChange} hideOnSinglePage />
          </div>
        }
      </div>
    )
  }
}
