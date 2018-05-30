import React from 'react'
import './secondDegreeContacts.css'
import { Row, Col } from 'antd'
import { inject, observer } from 'mobx-react'
import FriendCard from '../common/friend-card/FriendCard'
import { ContactsApi } from 'src/ajax'

@inject('userStore')
@observer
export default class SecondDegreeContacts extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    this.getFriendsList()
  }

  async getFriendsList() {
    try {
      const { data } = await ContactsApi.fetchSecondDegreeFriends(this.props.userStore.user.id)
      this.setState({
        friends: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <div styleName="title">
          <span styleName="title-info">二度人脉</span>
        </div>
        <div styleName="content">
          <Row gutter={16}>
            {this.state.friends.length === 0 ? (<Col span={6} style={{margin: '20px', fontSize: '20px'}}>暂无相关好友</Col>) : this.state.friends.map((item, idx) => {
              return (
                <Col span={6} key={idx}><FriendCard info={item} type="second-degree" /></Col>
              )
            })}
          </Row>
        </div>
      </div>
    )
  }
}
