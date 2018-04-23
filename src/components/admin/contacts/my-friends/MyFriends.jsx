import React from 'react'
import './myFriends.css'
import { Row, Col } from 'antd'
import { inject, observer } from 'mobx-react'
import FriendCard from './friend-card/FriendCard'
import { ContactsApi } from 'src/ajax'

@inject('userStore')
@observer
export default class MyFriends extends React.Component {
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
      const { data } = await ContactsApi.fetchFriendsList(this.props.userStore.user.id)
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
          <span styleName="title-info">我的好友</span>
        </div>
        <div styleName="content">
          <Row gutter={16}>
            {this.state.friends.map((item, idx) => {
              return (
                <Col span={6} key={idx}><FriendCard info={item} /></Col>
              )
            })}
          </Row>
        </div>
      </div>
    )
  }
}
