import React from 'react'
import './finishedCard.css'
import { PartyAInfo, PartyBInfo, Evaluation } from '../common'
import { Row, Col } from 'antd'

export default class FinishedCard extends React.Component {
  render() {
    return (
      <div>
        <div styleName="title">完成</div>
        <div styleName="content">
          <PartyAInfo />
          <PartyBInfo />
          <Row>
            <Col span={12}>
              <Evaluation type="b" />
            </Col>
            <Col span={12}>
              <Evaluation type="a" />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
