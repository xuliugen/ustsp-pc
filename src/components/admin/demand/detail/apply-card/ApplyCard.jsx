import React from 'react'
import './applyCard.css'
import RegisteredPerson from './registered-person/RegisteredPerson'
import FollewedPerson from './follewed-person/FollewedPerson'
import { observer, inject } from 'mobx-react'

@inject('demandStore')
@observer
export default class ApplyCard extends React.Component {
  render() {
    const registeredPersons = this.props.demandStore.registeredPersons.map((registeredPerson, idx) => <RegisteredPerson registeredPerson={registeredPerson} key={idx} />)
    const follewedPersons = this.props.demandStore.follewedPersons.map((follewedPerson, idx) => <FollewedPerson follewedPerson={follewedPerson} key={idx} />)
    return (
      <div>
        <div styleName="title">
          <span styleName="title-text">报名/关注详情</span>
          {/* <button styleName="title-button">查看全部</button> */}
        </div>
        <div styleName="persons">
          <div styleName="registered" >
            <div styleName="persons-title">已报名({registeredPersons.length})</div>
            <div styleName="persons-form">
              {registeredPersons}
            </div>
          </div>
          <div styleName="followed">
            <div styleName="persons-title">已关注({follewedPersons.length})</div>
            <div styleName="persons-form">
              {follewedPersons}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
